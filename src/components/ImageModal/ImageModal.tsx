import { useEffect } from 'react'
import type { FC } from 'react'
import Modal from 'react-modal'
import css from './ImageModal.module.css'

Modal.setAppElement('#root')

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.Overlay}
      className={css.Modal}
      shouldCloseOnOverlayClick={true}
    >
      <div onClick={handleOverlayClick}>
        <img src={imageUrl} alt="Modal" className={css.photo} />
      </div>
    </Modal>
  )
}

export default ImageModal
