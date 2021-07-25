import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const notesApi = createApi({
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

export const { useGetNotesQuery, useRemoveNoteMutation, useAddNoteMutation } = notesApi;

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: uuid(),
        isActive: true,
        ...action.payload,
      });
    },
    changeStateTodo(state, action) {
      const newState = state.filter((note) => note.id !== action.payload.id);
      newState.push({
        id: uuid(),
        isActive: false,
        ...action.payload,
      });
      return newState;
    },
    removeTodo(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addTodo, changeStateTodo, removeTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    todos: todoSlice.reducer,
  },
  middleware: (getDefaultMiddlewar) => getDefaultMiddlewar().concat(notesApi.middleware),
});
