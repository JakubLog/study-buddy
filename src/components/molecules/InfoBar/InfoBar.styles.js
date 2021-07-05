import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  nav {
    margin-left: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  margin: 0 7px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: 5px 10px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 50%;
  transition: background, color 0.3s ease-in-out;
  box-shadow: 0 3px 12px -6px ${({ theme }) => theme.colors.black};

  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
  }
`;
