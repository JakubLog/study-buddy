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

  const getMessages = async (id) => {
    try {
      const {
        data: { messages },
      } = await axios.get(`/messages/${id}`);
      setReturnedData(messages);
    } catch (e) {
      dispatchError("Sorry, now we can't get messages!");
    }
  };

  const openModalStudents = async (id) => {
    await findStudentById(id);
    setModalState(true);
  };

  const openModalEvents = () => {
    setModalState(true);
  };

  const openModalMessages = async (id) => {
    await getMessages(id);
    setModalState(true);
  };

  const closeModal = () => setModalState(false);

  return {
    closeModal,
    openModalEvents,
    openModalStudents,
    openModalMessages,
    isOpen: modalState,
    returnedData,
  };
};

export default useModal;
