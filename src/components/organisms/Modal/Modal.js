import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper, ModalBackgound } from './Modal.styles';

const Modal = ({ closeModal, children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalBackgound />
      <ModalWrapper>
        {children}
        <Button isBig onClick={closeModal}>
          Close modal
        </Button>
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
