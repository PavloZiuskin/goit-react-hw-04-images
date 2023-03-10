import { Component } from "react";
import { createPortal } from 'react-dom';
import { FaRegWindowClose } from "react-icons/fa";
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent,IconButton } from './Modal.styled'



const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEsc);
    }

    handleBackdrop = event => {
        if (event.target === event.currentTarget) {
        this.props.onClose();
        }
    };

    handleEsc = event => {
        if (event.code === 'Escape') {
        this.props.onClose();
        }
    };
    render() {
        const { currentImageUrl, currentImageDescription, onClose } = this.props;

        return createPortal(
            (<ModalBackdrop onClick={this.handleBackdrop}>
                <ModalContent>
                    <IconButton type="buttom" onClick={onClose} aria-label="close window"><FaRegWindowClose/></IconButton>
                    <img src={currentImageUrl} alt={currentImageDescription} />
                </ModalContent>
            </ModalBackdrop>),
            modalRoot);
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired,
    currentImageTag:PropTypes.string.isRequired
}