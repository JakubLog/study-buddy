import React from 'react';
import { Wrapper, StyledAverage } from './Average.styles';

const Average = ({ average, ...props }) => (
  <Wrapper>
    <StyledAverage {...props} average={average}>
      {average}
    </StyledAverage>
  </Wrapper>
);

export default Average;
