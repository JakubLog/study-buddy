import React from 'react';
import UserListItem from 'components/molecules/UserListItem/StudentListItem';
import { StyledList } from './StudentsList.styles';
import { Button } from 'components/atoms/Button/Button';
import { ButtonGroup } from 'components/atoms/ButtonGroup/ButtonGroup';
import useModal from 'hooks/useModal';
import Modal from '../Modal/Modal';
import Messages from '../Messages/Messages';
import AddMessage from 'components/molecules/AddMessage/AddMessage';

const UserList = ({ openModal, students = [], groupId = 'A' }) => {
  const { isOpen, openModalMessages, returnedData, closeModal } = useModal();
  const { isOpen: isOpenEditor, openModalEvents: openModalEditor, closeModal: closeModalEditor } = useModal();

  return (
    <>
      <StyledList>
        {students.map((studentData) => (
          <UserListItem key={studentData.name} openModal={openModal} studentData={studentData} />
        ))}
        <ButtonGroup style={{ marginTop: '20px' }}>
          <Button onClick={openModalEditor}>Add group message</Button>
          <Button onClick={() => openModalMessages(groupId)}>Show group messages</Button>
        </ButtonGroup>
      </StyledList>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <Messages data={returnedData} />
        </Modal>
      ) : null}
      {isOpenEditor ? (
        <Modal closeModal={closeModalEditor}>
          <AddMessage group={groupId} />
        </Modal>
      ) : null}
    </>
  );
};

export default UserList;
