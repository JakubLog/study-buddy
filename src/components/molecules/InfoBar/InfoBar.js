import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { InfoBarWrapper, StyledLink } from './InfoBar.styles';

const InfoBar = ({ activeGroup, groups = [] }) => {
  return (
    <InfoBarWrapper>
      <Title>Group {activeGroup ? activeGroup : 'A'}</Title>
      <nav>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`}>
            {group}
          </StyledLink>
        ))}
      </nav>
    </InfoBarWrapper>
  );
};

export default InfoBar;
