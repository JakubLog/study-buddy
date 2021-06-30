import styled from 'styled-components';

export const StyledListItem = styled.li`
  padding: 25px 0;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid #dfe2e8;
  }
`;
