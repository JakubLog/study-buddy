import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  min-width: 500px;
  box-shadow: 0 5px 15px -10px ${({ theme }) => theme.colors.black};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
