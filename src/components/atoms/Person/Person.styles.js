import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-right: 15px;
  * {
    margin: 0;
    padding: 0;
  }
`;
export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;
export const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
