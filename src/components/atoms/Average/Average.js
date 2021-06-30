import React from 'react';
import { Wrapper, StyledAverage } from './Average.styles';

const Average = ({ average }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
  </Wrapper>
);

export default Average;
