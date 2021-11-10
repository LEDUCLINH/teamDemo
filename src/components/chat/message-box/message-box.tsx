import { Button, Paper } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import { DropzoneDialog } from 'material-ui-dropzone'
import React, { useState } from 'react'
import {
  useSendMessageMutation,
  useCreateRoomForUserMutation,
} from '../../../generated/graphql'
import styles from './message-box.module.scss'
import { upload } from '../../../utils/object-storage/upload'
import AttachFileOutlined from '@material-ui/icons/AttachFileOutlined'
import { useUser } from '../../../utils/user/user-context'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import SendIcon from '@material-ui/icons/Send'
import ToolTip from '@material-ui/core/Tooltip'

type MessageBoxType = {
  receiverId: number | string | string[] | undefined
  roomId?: number
  isRoomPresent: boolean
  onRoomCreate: (roomId: number) => void
  onIsRoomPresentChange: (isRoomPresent: boolean) => void
}
const MessageBox = ({
  receiverId,
  roomId,
  isRoomPresent,
  onIsRoomPresentChange,
  onRoomCreate,
}: MessageBoxType) => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [fileUploading, setFileUploading] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [{}, sendMessage] = useSendMessageMutation()
  const [{}, createRoom] = useCreateRoomForUserMutation()
  const { user, auth } = useUser(true)

  const onEnter = async (e: any) => {
    if ((e.key === 'Enter' || e.keyCode === 13) && e.ctrlKey) {
      await handleSendMessage()
    }
  }

  const handleFileUpload = async (files: any) => {
    setFileUploading(true)
    const file = files[0]
    const token = auth.idToken?.token
    if (!file || !token) {
      return
    }

    const uploadedFile = await upload(file, token)

    let room: any

    if (!isRoomPresent) {
      // create the room
      room = await createRoom({
        user_id: receiverId,
        my_id: user?.id,
      })
    }

    await sendMessage({
      content: uploadedFile.file.url,
      user_id: user?.id,
      room_id: roomId || room?.data?.insert_rooms?.returning[0].id,
      is_file: true,
      file_id: uploadedFile.file.id,
    })

    if (room) {
      onIsRoomPresentChange(true)
      onRoomCreate(room.data?.insert_rooms?.returning[0].id)
    }

    setFileUploading(false)
  }

  const handleSendMessage = async () => {
    if (!newMessage && newMessage.trim().length === 0) {
      return
    }
    if (receiverId === user?.id) {
      return
    }
    let room: any

    if (!isRoomPresent) {
      // create the room
      room = await createRoom({
        user_id: receiverId,
        my_id: user?.id,
      })
    }

    await sendMessage({
      content: newMessage,
      user_id: user?.id,
      room_id: roomId || room?.data?.insert_rooms?.returning[0].id,
    })

    if (room) {
      onIsRoomPresentChange(true)
      onRoomCreate(room.data?.insert_rooms?.returning[0].id)
    }
    setNewMessage('')
  }

  return (
    <div className={`${styles['message-box']}`}>
      <Paper className={`${styles['message-input-box']}`} variant="elevation">
        <TextareaAutosize
          className={`${styles['message-input']}`}
          maxRows={5}
          minRows={3}
          aria-label="message box"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={onEnter}
        />
      </Paper>

      <DropzoneDialog
        open={isUploadDialogOpen}
        onSave={(files) => {
          handleFileUpload(files)
          setIsUploadDialogOpen(false)
        }}
        // acceptedFiles={['*/*']}
        filesLimit={1}
        previewGridProps={{
          container: { xs: 12 },
          item: { xs: 12 },
        }}
        maxFileSize={5000000}
        onClose={() => setIsUploadDialogOpen(false)}
        submitButtonText="Upload"
      />

      <Paper className={`${styles['message-action-box']}`}>
        <IconButton type="submit" aria-label="search" disabled={fileUploading}>
          {fileUploading ? (
            <CircularProgress />
          ) : (
            <ToolTip title={'Send file'} arrow>
              <AttachFileOutlined onClick={() => setIsUploadDialogOpen(true)} />
            </ToolTip>
          )}
        </IconButton>
        <ToolTip
          title={
            newMessage.trim().length === 0
              ? 'Please write a message to send'
              : ''
          }
          arrow
        >
          <Button
            variant={newMessage.trim().length !== 0 ? 'contained' : 'text'}
            onClick={handleSendMessage}
            endIcon={<SendIcon />}
            color={'secondary'}
            style={{
              color:
                newMessage.trim().length !== 0 ? '#fff' : 'rgba(0,0,0,0.54)',
              borderRadius: '26px',
            }}
          >
            SEND
          </Button>
        </ToolTip>
      </Paper>
    </div>
  )
}

export default MessageBox
