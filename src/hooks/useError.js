import React from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = React.useState(null);

  const dispatchError = (dispatch) => {
    setError(dispatch);
    setTimeout(() => {
      setError(null);
    }, 10000);
  };

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const error = React.useContext(ErrorContext);

  if (!error) {
    throw new Error('Error is not in context!');
  }

  return error;
};
