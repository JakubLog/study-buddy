import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
