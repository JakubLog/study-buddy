import { configureStore } from '@reduxjs/toolkit';
import notes from './api/notes';
import todo from './api/todo';
import groups from './api/groups';
import students from './api/students';

export const store = configureStore({
  reducer: {
    [notes.reducerPath]: notes.reducer,
    [todo.reducerPath]: todo.reducer,
    [groups.reducerPath]: groups.reducer,
    [students.reducerPath]: students.reducer,
  },
  middleware: (getDefaultMiddlewar) => getDefaultMiddlewar().concat(notes.middleware).concat(todo.middleware),
});

export * from './api/notes';
export * from './api/todo';
export * from './api/groups';
export * from './api/students';
