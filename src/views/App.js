import React from 'react';
import useAuth from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import Authorized from './Authorized/Authorized';
import UnAuthorized from './UnAuthorized/UnAuthorized';

const App = () => {
  const { user } = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <Authorized /> : <UnAuthorized />}
    </>
  );
};

export default App;
