import styled from 'styled-components';

export const StudentInfoWrapper = styled.div`
  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

export const StudentInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;

export const StudentInformations = styled.div`
  padding: 30px 15px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StudentAverageGrades = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.l};
  list-style-type: none;
  margin: 30px 0;
`;

export const StyledItem = styled.li`
  padding-left: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  #average {
    margin-left: 20px;
  }
`;
