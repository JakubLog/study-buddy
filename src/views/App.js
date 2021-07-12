import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import { Wrapper } from './App.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import useAuth from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import Notes from './Notes/Notes';

const AuthorizedComponent = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/group/" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes/">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthorizedComponent = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <FormField label="Login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <p>Login is required</p>}
      <FormField label="Password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <p>Password is required</p>}
      <Button>Login in</Button>
    </form>
  );
};

const App = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthorizedComponent /> : <UnAuthorizedComponent />}
    </>
  );
};

export default App;
