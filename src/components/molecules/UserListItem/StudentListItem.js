import React from 'react';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import { StyledListItem } from './StudentListItem.styles';
import IconButton from 'components/atoms/IconButton/IconButton';
import Person from 'components/atoms/Person/Person';
import Average from 'components/atoms/Average/Average';

const StudentListItem = ({ openModal, studentData: { id, name, attendance, average = '0%' } }) => {
  return (
    <StyledListItem>
      <Average average={average} />
      <Person name={name} attendance={attendance} />
      <IconButton type="OPINION" onClick={() => openModal(id)} />
      <IconButton type="MESSAGE" />
      <IconButton type="DELETE" />
    </StyledListItem>
  );
};

StudentListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentListItem;
