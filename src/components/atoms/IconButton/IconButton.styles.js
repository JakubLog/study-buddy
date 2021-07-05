import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
