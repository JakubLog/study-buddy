import React from 'react';
import { usersData } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UserList = () => (
  <div>
    <ul>
      {usersData.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UserList;
