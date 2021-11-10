import ChatSideBar from '../chat/chat-sidebar/chat-sidebar'
import ChatHeader from '../chat/message-header/message-header'
import styles from './message-detail.module.scss'

const MessageDetailWithNoRoom = () => {
  return (
    <div>
      {/* TODO: set padding to 36px for large screen */}
      <div className={`${styles['message-detail-container']}`}>
        <div>
          <ChatHeader online={false} noRoom={true} />
        </div>
        <div className={`${styles['message-detail']}`}>
          <div>
            <ChatSideBar />
          </div>

          <div className={`${styles['no-room']}`}>
            <p>Select message room to start messaging</p>
          </div>
          <div className={`${styles['chat-profile-container']}`} />
        </div>
      </div>
    </div>
  )
}

export default MessageDetailWithNoRoom
