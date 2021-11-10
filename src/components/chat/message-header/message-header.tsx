import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './message-header.module.scss'
import { useGetUserQuery } from '../../../generated/graphql'

function ChatHeader(props: { online: Boolean; noRoom?: Boolean }) {
  const router = useRouter()
  const { user_id } = router.query

  const [data] = useGetUserQuery({
    variables: {
      user_id,
    },
  })

  return (
    <div className={`${styles['header']}`}>
      <div className={`${styles['header-grid-container']}`}>
        <div
          className={`${styles['header-text-container']} ${
            props.noRoom ? styles['no-room-text-container'] : ''
          }`}
        >
          <h2 className={`${styles['header-text']}`}>All Conversations</h2>
        </div>
        {user_id && (
          <div>
            <div className={`${styles['profile-card']}`}>
              <Image
                src={
                  data.data?.users_by_pk?.avatar?.url
                    ? data.data?.users_by_pk?.avatar?.url
                    : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                        data.data?.users_by_pk?.full_name || ''
                      )}.svg`
                }
                height={45}
                width={45}
                alt={`${data.data?.users_by_pk?.full_name}'s Avatar`}
                className={`${styles['profile-images']}`}
              />
              <div className={`${styles['profile-name']}`}>
                <span>{data.data?.users_by_pk?.full_name}</span>
                <span>{props.online ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          </div>
        )}
        <div className={`${styles['empty']}`}></div>
      </div>
    </div>
  )
}

export default ChatHeader
