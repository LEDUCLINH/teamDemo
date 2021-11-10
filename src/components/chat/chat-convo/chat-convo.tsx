import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ContentLinkIcon from '../../../assets/icons/post-detail/content-link.svg'
import {
  Messages,
  useGetMessagesForRoomSubscription,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
import postDetailStyle from '../../post-detail/post-detail.module.scss'
import styles from './chat-convo.module.scss'
import MessageBox from '../message-box/message-box'

function FileCard({ file }: any) {
  return (
    <>
      <a
        className={postDetailStyle.postDetail__postAttachment}
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        download={file.name}
      >
        <Image alt="Attachment" src={ContentLinkIcon} />
        <Typography variant="body2" color="textSecondary">
          {file.name}
        </Typography>
      </a>
    </>
  )
}

function ChatMain({
  roomId,
  setRoomId,
  isRoomPresent,
  setIsRoomPresent,
}: {
  roomId: number
  isRoomPresent: boolean
  setIsRoomPresent: (isRoomPresent: boolean) => void
  setRoomId: (roomId: number) => void
}) {
  // const classes = useStyles()
  const router = useRouter()
  // const [isRoomPresent, setIsRoomPresent] = useState(roomPresent)
  // const [roomId, setRoomId] = useState(room_id)

  const { user_id } = router.query

  const { user } = useUser(true)

  const handleSubscription = (messages: Messages[] = [], response: any) => {
    return response?.messages
  }

  const [data, executeSubscription] = useGetMessagesForRoomSubscription(
    {
      variables: {
        room_id: roomId,
      },
    },
    handleSubscription
  )

  useEffect(() => {
    executeSubscription()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId])

  return (
    <>
      <div className={`${styles['chat-convo-container']}`}>
        {/*  message writing box */}
        <div>
          <MessageBox
            isRoomPresent={isRoomPresent}
            onRoomCreate={setRoomId}
            onIsRoomPresentChange={setIsRoomPresent}
            roomId={roomId}
            receiverId={user_id}
          />
        </div>

        {/*message display component  */}

        {!isRoomPresent ? (
          <div className={`${styles['first-message-box']}`}>
            <p>Send your first message...</p>
          </div>
        ) : (
          <div className={`${styles['chat-convo-display']}`}>
            {data.data?.map((message, index) => (
              <div
                key={index}
                className={`${styles['message-text']} ${
                  message.user.id === user?.id
                    ? `${styles['my-message-text']}`
                    : `${styles['peers-message-text']}`
                }`}
              >
                <div
                  className={
                    message.user.id === user?.id
                      ? `${styles['my-message']}`
                      : `${styles['peers-message']}`
                  }
                >
                  <pre>
                    <p>
                      {message.is_file ? (
                        <FileCard file={message.file} />
                      ) : (
                        message.content
                      )}
                    </p>
                  </pre>
                </div>
                <div className={`${styles['message-timestamp']}`}>
                  {dayjs(message.created_at).format('MMM DD, h:m A')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ChatMain
