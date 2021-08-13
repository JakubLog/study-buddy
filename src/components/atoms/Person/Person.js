import React from 'react';
import PropTypes from 'prop-types';
import { Name, Attendance, Wrapper } from './Person.styles';

const Person = ({ name, attendance }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Attendance>attendance: {attendance}</Attendance>
  </Wrapper>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default Person;
