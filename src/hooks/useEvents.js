import React from 'react';
import { useError } from './useError';
import axios from 'axios';

const EventsContext = React.createContext({});

const EventsProvider = ({ children }) => {
  const [group, setGroup] = React.useState('A');
  const [events, setEvents] = React.useState([]);
  const { dispatchError } = useError();

  const changeGroup = (group) => setGroup(group);

  React.useEffect(() => {
    (async () => {
      try {
        const {
          data: { events },
        } = await axios.get(`/events/${group}`);
        setEvents(events);
      } catch (e) {
        dispatchError("Sorry, now we can't get events info!");
      }
    })();
  }, [group]);

  return <EventsContext.Provider value={{ events, changeGroup }}>{children}</EventsContext.Provider>;
};

export default EventsProvider;

export const useEvents = () => {
  const events = React.useContext(EventsContext);
  return events;
};
