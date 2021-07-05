import axios from 'axios';
import { useCallback } from 'react';

const useDashboard = () => {
  const getGroups = useCallback(async () => {
    const response = await axios.get(`/group/`);
    const {
      data: { groups },
    } = response;
    return groups;
  }, []);

  const getStudents = useCallback(async (id, groups) => {
    const response = await axios.get(`/students/${id || groups[0]}`);
    const {
      data: { students },
    } = response;
    return students;
  }, []);

  return {
    getGroups,
    getStudents,
  };
};

export default useDashboard;
