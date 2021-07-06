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
          <StyledItem>
            Modern Economy
            <Average id="average" average={data.average} />
          </StyledItem>
          <StyledItem>
            Trade and Logisitcs <Average id="average" average={data.average} />
          </StyledItem>
          <StyledItem>
            Business Philosophy <Average id="average" average={data.average} />
          </StyledItem>
        </StudentAverageGrades>
        <p>
          Attendance in semester: <span style={{ fontWeight: 'bold' }}>{data.attendance}</span>
        </p>
      </StudentInformations>
    </StudentInfoWrapper>
  );
};

export default StudentInfo;
