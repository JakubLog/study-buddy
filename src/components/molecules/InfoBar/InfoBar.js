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
      <Title>Group {activeGroup ? activeGroup.name : 'A'}</Title>
      <nav>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group.name}`}>
            {group.name}
          </StyledLink>
        ))}
      </nav>
      <EventButton onClick={() => openModalEvents(activeGroup)}>Show group events</EventButton>
      <Events isOpen={isOpen} closeModal={closeModal} returnedData={returnedData} />
    </InfoBarWrapper>
  );
};

InfoBar.propTypes = {
  activeGroup: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
};

export default InfoBar;
