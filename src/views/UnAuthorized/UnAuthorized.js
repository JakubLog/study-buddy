import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { useError } from 'hooks/useError';
import { Button } from 'components/atoms/Button/Button';
import { Form, AuthWrapper } from './UnAuthorized.styles';
import useAuth from 'hooks/useAuth';

const UnAuthorized = () => {
  const { signIn, signInWithGoogle } = useAuth();
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
    <AuthWrapper>
      <Form onSubmit={handleSubmit(process)}>
        <FormField label="Login" name="login" id="login" {...register('login', { required: true })} />
        <FormField label="Password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <text>Password is required</text>}
        {errors.login && <text>Login is required</text>}
        <Button>Login in</Button>
      </Form>
      <p>or</p>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </AuthWrapper>
  );
};

export default UnAuthorized;
