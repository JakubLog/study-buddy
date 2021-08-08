import React from 'react';
import { Wrapper, StyledTitle } from './AddMessage.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { getDate } from 'helpers/getDate';
import { useError } from 'hooks/useError';
import axios from 'axios';

const AddMessage = ({ group }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { dispatchError } = useError();

  const process = async ({ title, description }) => {
    const time = getDate();
    const author = 'Teacher';

    try {
      axios.post('/messages', { title, description, author, time, group });
    } catch (err) {
      dispatchError('Something went wrong with this form! Please, contact with support!');
    }
  };

  return (
    <Wrapper as="form" onSubmit={handleSubmit(process)}>
      <StyledTitle>Group {group} - Message</StyledTitle>
      <FormField
        label="Title"
        placeholder={errors.title && 'This input is required!'}
        style={{ marginBottom: '25px' }}
        {...register('title', { required: true })}
      />
      <FormField
        label="Description"
        placeholder={errors.description && 'This input is required!'}
        isArea
        style={{ height: '200px' }}
        {...register('description', { required: true })}
      />
      <Button type="submit">Add message for {group} Group</Button>
    </Wrapper>
  );
};

export default AddMessage;
