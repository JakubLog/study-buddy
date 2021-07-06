import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';

const UserList = ({ openModal, users = [] }) => {
  return (
    <StyledList>
      {users.map((userData) => (
        <UserListItem key={userData.name} openModal={openModal} userData={userData} />
      ))}
    </StyledList>
  );
};

export default UserList;
