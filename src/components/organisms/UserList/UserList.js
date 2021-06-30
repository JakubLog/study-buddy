import React from 'react';
import { usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {usersData.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
