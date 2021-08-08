import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { Button } from 'components/atoms/Button/Button';
import { ButtonGroup } from 'components/atoms/ButtonGroup/ButtonGroup';
import useModal from 'hooks/useModal';
import Modal from '../Modal/Modal';
import Messages from '../Messages/Messages';
import AddMessage from 'components/molecules/AddMessage/AddMessage';

const UserList = ({ openModal, users = [], group = 'A' }) => {
  const { isOpen, openModalMessages, returnedData, closeModal } = useModal();
  const { isOpen: isOpenEditor, openModalEvents: openModalEditor, closeModal: closeModalEditor } = useModal();

  return (
    <>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} openModal={openModal} userData={userData} />
        ))}
        <ButtonGroup style={{ marginTop: '20px' }}>
          <Button onClick={openModalEditor}>Add group message</Button>
          <Button onClick={() => openModalMessages(group)}>Show group messages</Button>
        </ButtonGroup>
      </StyledList>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <Messages data={returnedData} />
        </Modal>
      ) : null}
      {isOpenEditor ? (
        <Modal closeModal={closeModalEditor}>
          <AddMessage group={group} />
        </Modal>
      ) : null}
    </>
  );
};

export default UserList;
