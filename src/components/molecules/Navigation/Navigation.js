import React from 'react';
import { Wrapper, StyledLink, NavList, Logo } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        Study <br /> Buddy
      </Logo>
      <nav>
        <NavList>
          <StyledLink exact to="/">
            Dashboard
          </StyledLink>
          <StyledLink to="/add-user">Add User</StyledLink>
        </NavList>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
