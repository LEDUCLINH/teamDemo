import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './chat-profile.module.scss'

type ChatProfileType = {
  value: any
}
const ChatProfile = ({ value }: ChatProfileType) => {
  const router = useRouter()

  return (
    <div
      className={`${styles['profile-container']}`}
      onClick={function () {
        if (value.user.id) router.push(`/message/${value.user.id}`)
        return undefined
      }}
    >
      <div className={`${styles['profile-pic-wrapper']}`}>
        <Image
          alt={`${value?.user?.fullName}'s Avatar`}
          src={
            value.user?.avatar
              ? value.user?.avatar
              : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                  value.user.fullName
                )}.svg`
          }
          layout="fixed"
          height={56}
          width={56}
          sizes="56px"
          priority
          className={`${styles['profile-pic']}`}
        />
      </div>
      <div className={`${styles['profile-info']}`}>
        <span>{value.user?.fullName}</span>
        <span>{value.lastMessage?.content?.toString().slice(0, 20)}</span>
      </div>
      <div className={`${styles['last-date']}`}>
        {dayjs(value.lastMessage?.created_at).format('MMMM-DD YYYY')}
      </div>
    </div>
  )
}

export default ChatProfile
