import styled from 'styled-components';

export const ButtonGroup = styled.div`
  width: 100%;
  & > * {
    width: 50%;
    border-radius: 0;
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
    &:not(:last-child) {
      border-right: 2px solid ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;
