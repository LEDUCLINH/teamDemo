import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import {
  useGetRoomForUserQuery,
  useUserOnlineSubscription,
} from '../../generated/graphql'
import { useUser } from '../../utils/user/user-context'
import ChatMain from '../chat/chat-convo/chat-convo'
import ChatSideBar from '../chat/chat-sidebar/chat-sidebar'
import ChatProfile from '../chat/message-profile/message-profile'
import ChatHeader from '../chat/message-header/message-header'
import styles from './message-detail.module.scss'

dayjs.extend(utc)
const MessageDetail = () => {
  const router = useRouter()

  const { user_id } = router.query
  const { user } = useUser(true)

  const [isRoomPresent, setIsRoomPresent] = useState(false)
  const [roomId, setRoomId] = useState<number>()

  const [userIsOnline, setUserIsOnline] = useState(false)
  const [lastSeen, setLastSeen] = useState<any>()

  const handleSubscription = (oldData: any, response: any) => {
    setLastSeen(dayjs.utc(response.users_by_pk?.last_seen))
  }
  useUserOnlineSubscription(
    {
      variables: {
        id: user_id,
      },
    },
    handleSubscription
  )
  useEffect(() => {
    const interval = setInterval(() => {
      // check if the value of last_seen is less than 10 sec
      if (!lastSeen) return
      if (dayjs.utc().diff(dayjs.utc(lastSeen), 'seconds') <= 10) {
        setUserIsOnline(true)
      } else {
        setUserIsOnline(false)
      }
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [lastSeen])

  const [room, refetchRoomForUser] = useGetRoomForUserQuery({
    variables: {
      user_id,
      my_id: user?.id,
    },
  })

  useEffect(() => {
    refetchRoomForUser()
  }, [refetchRoomForUser])

  useEffect(() => {
    if (!room.fetching && room.data?.rooms[0]?.id) {
      setRoomId(room.data?.rooms[0]?.id)
      setIsRoomPresent(true)
    }
  }, [room])

  console.log({ roomId, isRoomPresent })

  return (
    <div>
      {/* TODO: set padding to 36px for large screen */}
      <div className={`${styles['message-detail-container']}`}>
        <div>
          <ChatHeader online={userIsOnline} />
        </div>

        <div className={`${styles['message-detail']}`}>
          <div>
            <ChatSideBar />
          </div>

          {room.fetching ? (
            <div className={`${styles['loading-container']}`}>
              <CircularProgress style={{ margin: 'auto' }} />
            </div>
          ) : (
            <ChatMain
              roomId={roomId!}
              setRoomId={setRoomId}
              isRoomPresent={isRoomPresent}
              setIsRoomPresent={setIsRoomPresent}
            />
          )}

          <div className={`${styles['chat-profile-container']}`}>
            <ChatProfile online={userIsOnline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageDetail
