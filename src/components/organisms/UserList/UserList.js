import React, { useContext } from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserContext } from 'Providers/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <Title>Users List</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UserList;
