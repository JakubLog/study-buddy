import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from './UserListItem.styles';
import Button from 'components/atoms/Button/Button';
import Person from 'components/atoms/Person/Person';
import Average from 'components/atoms/Average/Average';

const UserListItem = ({ deleteUser, userData: { name, attendance, average = '0%' } }) => (
  <StyledListItem>
    <Average average={average} />
    <Person name={name} attendance={attendance} />
    <Button onClick={() => deleteUser(name)} />
  </StyledListItem>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
  }),
};

export default UserListItem;
