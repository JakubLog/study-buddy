import React from 'react';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import { StyledListItem } from './UserListItem.styles';
import IconButton from 'components/atoms/IconButton/IconButton';
import Person from 'components/atoms/Person/Person';
import Average from 'components/atoms/Average/Average';

const UserListItem = ({ userData: { name, attendance, average = '0%' } }) => {
  return (
    <StyledListItem>
      <Average average={average} />
      <Person name={name} attendance={attendance} />
      <IconButton type="OPINION" />
      <IconButton type="MESSAGE" />
      <IconButton type="DELETE" />
    </StyledListItem>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UserListItem;
