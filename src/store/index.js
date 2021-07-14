import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const notesReducer = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

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

export const { addNote, removeNote } = notesReducer.actions;
export const { addTodo, changeStateTodo, removeTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    notes: notesReducer.reducer,
    todos: todoSlice.reducer,
  },
});
