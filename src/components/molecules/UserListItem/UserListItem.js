import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Person from 'components/atoms/Person/Person';
import Average from 'components/atoms/Average/Average';
import { UserShape } from 'types';

const UserListItem = ({ deleteUser, userData: { name, attendance, average = '0%' } }) => (
  <StyledListItem>
    <Average average={average} />
    <Person name={name} attendance={attendance} />
    <DeleteButton onClick={() => deleteUser(name)} />
  </StyledListItem>
);

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UserListItem;
