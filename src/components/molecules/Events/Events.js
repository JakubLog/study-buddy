import React from 'react';
import Modal from 'components/organisms/Modal/Modal';
import { EventsWrapper, EventItem, EventTitle, EventContent } from './Events.styles';
import { useEvents } from 'hooks/useEvents';

const Events = ({ isOpen, closeModal }) => {
  const { events } = useEvents();
  return (
    <>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <EventsWrapper>
            {events.map((event) => (
              <EventItem key={event.id}>
                <EventTitle>{event.name}</EventTitle>
                <EventContent>{event.content}</EventContent>
              </EventItem>
            ))}
          </EventsWrapper>
        </Modal>
      ) : null}
    </>
  );
};

export default Events;
