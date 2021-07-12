import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = (payload) => {
  return {
    type: 'note/add',
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'note/remove',
    payload,
  };
};

const initialState = {
  notes: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'note/add':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'note/remove':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const store = createStore(storeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
