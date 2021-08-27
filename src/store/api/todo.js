import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todo = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todo',
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: 'todo',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['todo'],
    }),
    changeStateTodo: builder.mutation({
      query: (body) => ({
        url: 'todo/change',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['todo'],
    }),
    removeTodo: builder.mutation({
      query: (body) => ({
        url: 'todo/delete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useChangeStateTodoMutation, useRemoveTodoMutation } = todo;

export default todo;
