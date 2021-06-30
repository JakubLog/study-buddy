import React from 'react';
import { usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {usersData.map((userData, i) => (
        <UserListItem i={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
