import { FormEvent, useCallback, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../redux/reducers'

import * as S from './styles'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
  pastTitle: string
}

export const UpdatePostModal = ({
  isOpen,
  onRequestClose,
  pastTitle
}: Props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      dispatch(
        updatePost({
          title,
          pastTitle,
          content,
          created_at: new Date().toLocaleDateString('pt-BR')
        })
      )
      setTitle('')
      setContent('')
      onRequestClose()
    },
    [title, pastTitle, content, dispatch, onRequestClose]
  )

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.FormContent onSubmit={handleSubmit}>
        <h1>Edit Item</h1>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Save</button>
      </S.FormContent>
    </Modal>
  )
}
