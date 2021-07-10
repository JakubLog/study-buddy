import { useState } from 'react';
import axios from 'axios';
import { useError } from './useError';

const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);
  const [returnedData, setReturnedData] = useState({});
  const { dispatchError } = useError();

  const findById = (id) => {
    axios
      .get(`/student/${id}`)
      .then(({ data: { students } }) => setReturnedData(students))
      .catch((err) => dispatchError("We can't now get students. Please contact with support."));
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
