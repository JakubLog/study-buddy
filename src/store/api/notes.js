import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const notes = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => 'notes',
      providesTags: ['notes'],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['notes'],
    }),
    removeNote: builder.mutation({
      query: (body) => ({
        url: 'removeNote',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['notes'],
    }),
  }),
});

export const { useGetNotesQuery, useRemoveNoteMutation, useAddNoteMutation } = notes;

export default notes;
