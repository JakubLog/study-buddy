import { configureStore } from '@reduxjs/toolkit';
import notes from './api/notes';
import todo from './api/todo';

export const store = configureStore({
  reducer: {
    [notes.reducerPath]: notes.reducer,
    [todo.reducerPath]: todo.reducer,
  },
  middleware: (getDefaultMiddlewar) => getDefaultMiddlewar().concat(notes.middleware).concat(todo.middleware),
});

export * from './api/notes';
export * from './api/todo';
