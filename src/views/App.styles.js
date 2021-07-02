import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
