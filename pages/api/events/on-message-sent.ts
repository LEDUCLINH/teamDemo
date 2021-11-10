import nextConnect from 'next-connect'
import dayjs from 'dayjs'

import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'

import type { NextApiRequest, NextApiResponse } from 'next'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'
import { gql } from 'graphql-request'
import { email } from '../../../src/utils/email/mailgun'
initFirebaseAdmin()

// POST /api/events/on-message-sent
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const uid = req.body.event.session_variables['x-hasura-firebase-uid']
    if (
      !/^hasura\-graphql-engine\//.test(req.headers['user-agent'] ?? '') ||
      req.body.trigger.name !== 'on_message_sent' ||
      req.body.table.name !== 'messages' ||
      req.body.event.op !== 'INSERT' ||
      !uid
    ) {
      res.status(401).send('Unauthorized')
      return
    }

    const roomId = req.body.event.data.new.room_id
    const authorId = req.body.event.data.new.user_id
    const messageContent = req.body.event.data.new.content

    const { user_rooms } = await hasuraServerRequest<
      {
        user_rooms: any
      },
      {
        roomId: number
      }
    >(
      gql`
        query user_room($roomId: bigint!) {
          user_rooms(where: { room_id: { _eq: $roomId } }) {
            room_id
            user_id
            user {
              full_name
              last_seen
              contact_address
              email
            }
          }
        }
      `,
      {
        roomId,
      }
    )

    try {
      if (user_rooms) {
        const receivers = user_rooms.filter(
          (ur: any) => ur.user_id !== authorId
        )
        const sender = user_rooms.find((ur: any) => ur.user_id === authorId)
        if (receivers && receivers.length > 0) {
          receivers.forEach(async (ur: any) => {
            if (dayjs().diff(dayjs(ur.user.last_seen), 'second') > 10) {
              //send email
              await email({
                to: ur.user.email,
                subject: `${sender.user.full_name} has sent you a message`,
                html: `
                                <h5>${sender.user.full_name} has sent you a message. </h5>
                                <p>${messageContent}</p>
                                <p>
                                    <a href="${process.env['NEXT_PUBLIC_BASE_URL']}/message/${sender.user_id}">
                                        Reply to this message on 1stKare
                                    </a>
                                </p>
                                `,
              })
            }
          })
        }
      }

      res.status(200).json({ success: true })
    } catch (e) {
      res.status(500).json({ success: false, error: (e as Error)?.message })
    }
  }
)

export default handler
