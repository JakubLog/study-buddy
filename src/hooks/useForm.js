import { useReducer } from 'react';

const reducerActions = {
  changeValues: 'CHANGE VALUES',
  clear: 'CLEAR VALUES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerActions.changeValues:
      return {
        ...state,
        [action.name]: action.value,
      };
    case reducerActions.clear:
      return {
        ...action.initial,
      };
    default: {
      console.log(new Error('Type is not defined in reducer'));
      return state;
    }
  }
};

export const useForm = (initialFormState) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const changeFormValue = (e) => {
    dispatch({
      type: reducerActions.changeValues,
      name: e.target.name,
      value: e.target.value,
    });
  };

  const clearFormValue = () => {
    dispatch({
      type: reducerActions.clear,
      initial: initialFormState,
    });
  };

  return {
    formValues,
    changeFormValue,
    clearFormValue,
  };
};
