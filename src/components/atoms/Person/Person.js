import React from 'react';
import { Name, Attendance, Wrapper } from './Person.styles';

const Person = ({ name, attendance }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Attendance>attendance: {attendance}</Attendance>
  </Wrapper>
);

export default Person;
