import Modal from 'react-modal'

import * as S from './styles'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
  deletePost: () => void
}

export const DeletePostModal = ({
  isOpen,
  onRequestClose,
  deletePost
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <p>Are you sure you want to delete this item?</p>
        <div>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
          <button type="button" onClick={deletePost}>
            Ok
          </button>
        </div>
      </S.Container>
    </Modal>
  )
}
