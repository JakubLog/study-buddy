import React from 'react';
import { Wrapper, StyledLink, NavList, Logo } from './Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        Study <br /> Buddy
      </Logo>
      <nav>
        <NavList>
          <StyledLink to="/group">Dashboard</StyledLink>
          <StyledLink as="a" style={{ cursor: 'pointer' }} onClick={auth.signOut}>
            Logout
          </StyledLink>
        </NavList>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
