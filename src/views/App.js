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
import Todo from './Todo/Todo';

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
          <Route path="/todolist/">
            <Todo />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthorizedComponent = () => {
  const { signIn } = useAuth();
  const { dispatchError } = useError();

  const process = async (data) => {
    try {
      await signIn(data);
    } catch (err) {
      dispatchError(err.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(process)}
      style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <FormField style={{ marginBottom: '20px' }} label="Login" name="login" id="login" {...register('login', { required: true })} />
      <FormField
        style={{ marginBottom: '10px' }}
        label="Password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <text>Password is required</text>}
      {errors.login && <text>Login is required</text>}
      <Button style={{ marginTop: '10px' }}>Login in</Button>
    </form>
  );
};

const App = () => {
  const { user } = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <AuthorizedComponent /> : <UnAuthorizedComponent />}
    </>
  );
};

export default App;
