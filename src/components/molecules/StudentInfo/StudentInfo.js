import React from 'react';
import { StudentInfoWrapper, StudentInfoHeader, StudentInformations, StyledItem, StudentAverageGrades } from './StudentInfo.styles';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import Average from 'components/atoms/Average/Average';

const StudentInfo = ({ data }) => {
  return (
    <StudentInfoWrapper>
      <StudentInfoHeader>
        <div>
          <Title>{data.name}</Title>
          <Subtitle>Group {data.group}</Subtitle>
        </div>
        <Average isBig average={data.average} />
      </StudentInfoHeader>
      <StudentInformations>
        <p>
          Student course: <span style={{ fontWeight: 'bold' }}>Economy and finances</span>
        </p>
        <p>Average grades:</p>
        <StudentAverageGrades>
          {data.grades.map((grade) => (
            <StyledItem>
              {grade.subject}
              <Average id="average" average={grade.average} />
            </StyledItem>
          ))}
        </StudentAverageGrades>
        <p>
          Attendance in semester: <span style={{ fontWeight: 'bold' }}>{data.attendance}</span>
        </p>
      </StudentInformations>
    </StudentInfoWrapper>
  );
};

export default StudentInfo;
