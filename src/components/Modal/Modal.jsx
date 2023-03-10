import { useEffect } from "react";
import { createPortal } from 'react-dom';
import { FaRegWindowClose } from "react-icons/fa";
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent,IconButton } from './Modal.styled'



const modalRoot = document.querySelector('#modal-root');
export const Modal =({
  currentImageUrl,
  currentImageDescription,
  onClose,
})=>{
useEffect(() => {
    const handleEsc = event => event.code === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
    
        

        return createPortal(
            (<ModalBackdrop onClick={handleBackdrop}>
                <ModalContent>
                    <IconButton type="buttom" onClick={onClose} aria-label="close window"><FaRegWindowClose/></IconButton>
                    <img src={currentImageUrl} alt={currentImageDescription} />
                </ModalContent>
            </ModalBackdrop>),
            modalRoot);
    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired,
    currentImageTag:PropTypes.string.isRequired
}