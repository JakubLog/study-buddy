import { useState } from 'react';
import axios from 'axios';

const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);
  const [returnedData, setReturnedData] = useState({});

  const findById = (id) => {
    axios
      .get(`/student/${id}`)
      .then(({ data: { students } }) => setReturnedData(students))
      .catch((err) => console.error(err));
  };

  const closeModal = () => setModalState(false);
  const openModal = (id) => {
    findById(id);
    setModalState(true);
    console.log(returnedData);
  };

  return {
    closeModal,
    openModal,
    isOpen: modalState,
    returnedData,
  };
};

export default useModal;
