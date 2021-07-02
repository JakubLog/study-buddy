import styled from 'styled-components';

export const ViewWrapper = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  width: 500px;
  margin: 50px;
  box-shadow: 0 5px 15px -10px ${({ theme }) => theme.colors.black};
`;
