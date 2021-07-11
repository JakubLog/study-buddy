import axios from 'axios';
import React from 'react';

const RenderProvider = ({ children }) => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('/allStudents')
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return children(students);
};

export default RenderProvider;
