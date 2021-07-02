import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UserList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Users List</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func.isRequired,
};

export default UserList;
