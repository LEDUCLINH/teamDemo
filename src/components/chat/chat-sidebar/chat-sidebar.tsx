import { useRouter } from 'next/router'
import {
  useGetRoomForUserQuery,
  useGetRoomsListQuery,
  useGetUserQuery,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
import ChatProfile from '../chat-profile/chat-profile'
import styles from './chat-sidebar.module.scss'

function ChatSideBar() {
  const { user } = useUser(true)
  const router = useRouter()

  const { user_id } = router.query

  const [room] = useGetRoomForUserQuery({
    variables: {
      user_id,
      my_id: user?.id,
    },
  })

  const [peerUser] = useGetUserQuery({
    variables: {
      user_id,
    },
  })

  // const [rooms, setRooms] = useState<GetRoomsListQuery>()
  // get all rooms for the user
  // don't need to make it a subscriptions for now.

  const [data] = useGetRoomsListQuery({
    variables: {
      user_id: user?.id,
    },
  })

  let finalChats: any

  if (!data.error && !data.fetching) {
    const chats = data.data?.rooms.map((item) => ({
      id: item.id,
      user: {
        fullName: item.user_rooms[0].user.full_name,
        avatar: item.user_rooms[0].user.avatar?.url,
        id: item.user_rooms[0].user.id,
      },
      lastMessage: {
        content: item.user_rooms[0].room.messages[0]?.content,
        created_at: item.user_rooms[0].room.messages[0]?.created_at,
      },
    }))

    let filteredChats: any = chats!

    if (!room.error && !room.fetching) {
      if (!room.data?.rooms.length) {
        // the room is not created we need to emulate it in the frontend
        filteredChats?.unshift({
          user: {
            fullName: peerUser.data?.users_by_pk?.full_name,
            avatar: peerUser.data?.users_by_pk?.avatar?.url,
          },
        })
      }
    }
    // setChatRooms(filteredChats as chatRooms[])
    finalChats = filteredChats
  }

  return (
    <>
      <div className={`${styles['sidebar-container']}`}>
        {/* add filter to remove rooms with no message */}
        {finalChats
          ?.filter(
            (v: any, i: any, a: any) =>
              a.findIndex((t: any) => t.id === v.id) === i
          )
          .filter((value: any) => value != null)
          .map((value: any, key: any) => (
            <>
              <ChatProfile value={value} key={key} />
              <hr className={`${styles['chat-profile-separator']}`} />
            </>
          ))}
      </div>
    </>
  )
}

export default ChatSideBar
