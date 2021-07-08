import { useState } from 'react';
import axios from 'axios';

const useSearchBar = (searchInput) => {
  const [found, setFound] = useState([]);

  const prepareStudents = (data = [], phrase) => {
    phrase = phrase.toLowerCase();
    const prepared = data.filter((student) => student.name.toLowerCase().indexOf(phrase) !== -1);
    const namesArray = prepared.map((item) => item.name);
    setFound(namesArray);
  };

  const prepareAndSendQuery = () => {
    const value = searchInput.current.value;
    if (value !== '' || value.length > 0) {
      axios.get('/allStudents/').then(({ data }) => {
        prepareStudents(data.students, value);
      });
    } else {
      setFound([]);
    }
  };

  return {
    found,
    prepareAndSendQuery,
  };
};

export default useSearchBar;
