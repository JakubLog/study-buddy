import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';

const UserList = ({ users = [] }) => {
  return (
    <StyledList>
      {users.map((userData) => (
        <UserListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  );
};

export default UserList;
