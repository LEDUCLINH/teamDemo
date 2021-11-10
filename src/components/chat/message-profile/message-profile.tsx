import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

// todo remove in prod
import { useGetUserQuery } from '../../../generated/graphql'
import styles from './message-profile.module.scss'

function ChatProfile(props: { online: Boolean }) {
  const router = useRouter()
  const { user_id } = router.query

  const [data] = useGetUserQuery({
    variables: {
      user_id,
    },
  })

  return (
    <>
      <div className={`${styles['message-profile-container']}`}>
        <div className={`${styles['basic-info-box']}`}>
          <Image
            src={
              data.data?.users_by_pk?.avatar?.url
                ? data.data?.users_by_pk?.avatar?.url
                : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                    data.data?.users_by_pk?.full_name || ''
                  )}.svg`
            }
            height={112}
            width={112}
            alt={`${data.data?.users_by_pk?.full_name}'s Avatar`}
            className={`${styles['profile-pic']}`}
          />
          <span className={`${styles['full-name']}`}>
            {data.data?.users_by_pk?.full_name}
          </span>
          <span className={`${styles['status']}`}>
            {props.online ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* TODO: handle logic here */}
        {/* <div className={`${styles['request-info']}`}>
          <p>
            [Client name] is asking for contact details. Lets chat and decide
          </p>
          <Button variant="contained" color="primary" size="large">
            Allow client
          </Button>
          <Button variant="outlined" size="large">
            Decline
          </Button>
        </div> */}
      </div>
    </>
  )
}

export default ChatProfile
