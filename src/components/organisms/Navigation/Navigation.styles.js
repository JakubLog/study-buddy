import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: block;
  font-weight: 700;
  text-decoration: none;
  margin-top: 15px;
  text-align: right;
  margin-right: 20px;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    transition: opacity 0.4s ease-in-out;
    opacity: 0;
    position: absolute;
    right: -22px;
    width: 21px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const NavList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 50px;
  padding: 0;
`;

export const Logo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 13px 15px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-top: 20px;
  text-align: right;
`;
