import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const groups = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'group',
    }),
  }),
});

export const { useGetGroupsQuery } = groups;

export default groups;
