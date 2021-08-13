import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage } from './Average.styles';

const Average = ({ average, ...props }) => (
  <Wrapper>
    <StyledAverage {...props} average={average}>
      {average}
    </StyledAverage>
  </Wrapper>
);

Average.propTypes = { average: PropTypes.number.isRequired };

export default Average;
