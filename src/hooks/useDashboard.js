import axios from 'axios';
import { useCallback } from 'react';

const studentsAPI = axios.create({});

const useDashboard = () => {
  studentsAPI.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');

      if (token) config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const getGroups = useCallback(async () => {
    const response = await studentsAPI.get(`/group/`);
    const {
      data: { groups },
    } = response;
    const preparedGroups = groups.map((group) => group.name);
    return preparedGroups;
  }, []);

  const getStudents = useCallback(async (id, groups) => {
    const response = await studentsAPI.get(`/students/${id || groups[0]}`);
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
