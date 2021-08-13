import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { InfoBarWrapper, StyledLink, EventButton } from './InfoBar.styles';
import useModal from 'hooks/useModal';
import Events from '../Events/Events';

const InfoBar = ({ activeGroup, groups = [] }) => {
  const { isOpen, closeModal, openModalEvents, returnedData } = useModal();
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
      <EventButton onClick={() => openModalEvents(activeGroup)}>Show group events</EventButton>
      <Events isOpen={isOpen} closeModal={closeModal} returnedData={returnedData} />
    </InfoBarWrapper>
  );
};

InfoBar.propTypes = {
  activeGroup: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.string),
};

export default InfoBar;
