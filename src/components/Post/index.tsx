import { MdOutlineDeleteForever } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

import * as S from './styles'
import { useCallback, useState } from 'react'
import { DeletePostModal } from '../DeletePostModal'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/reducers'
import { UpdatePostModal } from '../UpdatePostModal'

type Props = {
  username: string
  title: string
  content: string
  createdAt: string
}

export const Post = ({ username, title, content, createdAt }: Props) => {
  const [deletePostModalOpen, setDelePostModalOpen] = useState(false)
  const [updatePostModalOpen, setUpdatePostModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleOpenDeletePostModal = useCallback(() => {
    setDelePostModalOpen(true)
  }, [])

  const handleCloseDeletePostModal = useCallback(() => {
    setDelePostModalOpen(false)
  }, [])

  const handleDeletePost = useCallback(() => {
    dispatch(deletePost({ title }))
    handleCloseDeletePostModal()
  }, [dispatch, title, handleCloseDeletePostModal])

  const handleOpenUpdatePostModal = useCallback(() => {
    setUpdatePostModalOpen(true)
  }, [])

  const handleCloseUpdatePostModal = useCallback(() => {
    setUpdatePostModalOpen(false)
  }, [])

  return (
    <S.Container>
      <S.Header>
        <h3>{title}</h3>
        <div>
          <button type="button" onClick={handleOpenDeletePostModal}>
            <MdOutlineDeleteForever />
          </button>
          <button type="button" onClick={handleOpenUpdatePostModal}>
            <FaRegEdit />
          </button>
        </div>
      </S.Header>

      <S.PostContent>
        <S.PostHeader>
          <span>{username}</span>
          <span>{createdAt}</span>
        </S.PostHeader>
        <p>{content}</p>
      </S.PostContent>

      <DeletePostModal
        isOpen={deletePostModalOpen}
        onRequestClose={handleCloseDeletePostModal}
        deletePost={handleDeletePost}
      />

      <UpdatePostModal
        isOpen={updatePostModalOpen}
        onRequestClose={handleCloseUpdatePostModal}
        pastTitle={title}
      />
    </S.Container>
  )
}
