import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const students = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: (id) => `students/${id}`,
    }),
  }),
});

export const { useGetStudentsQuery } = students;

export default students;
