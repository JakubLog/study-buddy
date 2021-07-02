import styled from 'styled-components';

export const Wrapper = styled.div`
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
