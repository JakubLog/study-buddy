import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
