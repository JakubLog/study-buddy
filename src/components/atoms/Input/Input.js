import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: ${({ isArea }) => (isArea ? '15px' : '20px')};
  padding: 10px 20px;
  box-shadow: 0 2px 15px -12px ${({ theme }) => theme.colors.black};
  outline: none;
  width: ${({ isArea }) => (isArea ? '100%' : 'unset')};
  height: ${({ isArea }) => (isArea ? '500px' : 'unset')};
  resize: none;
  :focus {
    box-shadow: 0 3px 15px -8px ${({ theme }) => theme.colors.black};
  }
  ::placeholder {
    opacity: 0.6;
  }
`;
