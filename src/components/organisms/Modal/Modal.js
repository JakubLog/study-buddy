import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper, ModalBackgound } from './Modal.styles';

const container = document.getElementById('modal');

const Modal = ({ closeModal, children }) => {
  const node = document.createElement('div');

  useEffect(() => {
    container.appendChild(node);
    return () => container.removeChild(node);
  }, [node]);

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
    node
  );
};

export default Modal;
