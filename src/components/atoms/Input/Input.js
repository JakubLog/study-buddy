import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 2px 15px -12px ${({ theme }) => theme.colors.black};
  outline: none;
  :focus {
    box-shadow: 0 3px 15px -8px ${({ theme }) => theme.colors.black};
  }
`;
