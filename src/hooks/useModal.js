import { useState } from 'react';
import axios from 'axios';
import { useError } from './useError';

const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);
  const [returnedData, setReturnedData] = useState({});
  const { dispatchError } = useError();

  const findStudentById = async (id) => {
    try {
      const {
        data: { students },
      } = await axios.get(`/student/${id}`);
      setReturnedData(students);
    } catch (e) {
      dispatchError("Sorry, now we can't get student info!");
    }
  };

  const openModalStudents = async (id) => {
    await findStudentById(id);
    setModalState(true);
  };

  const openModalEvents = () => {
    setModalState(true);
  };

  const closeModal = () => setModalState(false);

  return {
    closeModal,
    openModalEvents,
    openModalStudents,
    isOpen: modalState,
    returnedData,
  };
};

export default useModal;
