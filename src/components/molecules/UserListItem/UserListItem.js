import React, { useContext } from 'react';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import { StyledListItem } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Person from 'components/atoms/Person/Person';
import Average from 'components/atoms/Average/Average';
import { UserContext } from 'Providers/UserContext';

const UserListItem = ({ userData: { name, attendance, average = '0%' } }) => {
  const { deleteUser } = useContext(UserContext);
  return (
    <StyledListItem>
      <Average average={average} />
      <Person name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </StyledListItem>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UserListItem;
