import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 37px' : '8px 25px')};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  font-weight: 900;
  cursor: pointer;
  transition: 0.15s background-color ease-in-out;
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  :hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
