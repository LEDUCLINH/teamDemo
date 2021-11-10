// import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { Button, Divider, Paper } from '@material-ui/core'
// import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopySharp'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import styles from './message-secondary.module.scss'
import {
  useCreateRoomForUserMutation,
  useSendMessageMutation,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'

//  todo remove for prod

function ChatSecondary(props: any) {
  const router = useRouter()
  const { user_id } = router.query
  const { user } = useUser(true)
  const [newMessage, setNewMessage] = useState('')

  const [{ error: SendMessageError }, sendMessage] = useSendMessageMutation()
  const [{ error: CreateRoomError }, createRoom] =
    useCreateRoomForUserMutation()

  console.log(SendMessageError, CreateRoomError)
  // there is no room

  const handleSendMessage = async () => {
    if (!newMessage) {
      console.log('Message is empty')
      return
    }

    if (user_id === user?.id) {
      return
    }

    // create the room
    const room = await createRoom({
      user_id: user_id,
      my_id: user?.id,
    })

    await sendMessage({
      content: newMessage,
      user_id: user?.id,
      room_id: room.data?.insert_rooms?.returning[0].id,
    })

    // call the parent component function to let is know that the room has been created
    props.setRoomPreset(room.data?.insert_rooms?.returning[0].id)
    setNewMessage('')
  }

  return (
    <>
      <div className={`${styles['wrapper']}`}>
        {/*  message writing box */}
        <div className={`${styles['message-box']}`}>
          <Paper className={styles['message-input']} variant="outlined">
            <InputBase
              className={styles['input']}
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <IconButton type="submit" aria-label="search">
              <FileCopyOutlinedIcon />
            </IconButton>
            <Divider className={styles['divider']} orientation="vertical" />
            <IconButton color="primary" aria-label="directions">
              <CameraAltOutlinedIcon />
            </IconButton>
          </Paper>

          <Button
            variant="contained"
            style={{ marginRight: '5%' }}
            onClick={handleSendMessage}
          >
            <SendOutlinedIcon />
          </Button>
        </div>

        {/*message display component  */}

        <div className={styles['message-area']}></div>
      </div>
    </>
  )
}

export default ChatSecondary
