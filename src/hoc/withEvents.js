import axios from 'axios';
import React from 'react';

const withEvents = (WrappedComponent) => {
  return () => {
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
      axios
        .get('/allStudents')
        .then((data) => setStudents(data))
        .catch((err) => console.error(err));
    }, []);

    return <WrappedComponent students={students} />;
  };
};

export default withEvents;

export const RandomComponent = (props) => <div>Check console {console.log(props)}</div>;

export const RandomComponentWithEvents = withEvents(RandomComponent);
