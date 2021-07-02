import React, { useState, useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Positioner } from './AddUser.styles';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UserContext } from 'Providers/UserContext';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { addNewUser } = useContext(UserContext);

  const changeFormValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    addNewUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={submitNewUser}>
      <Positioner>
        <Title>Add new student</Title>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={changeFormValue} />
        <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={changeFormValue} />
        <FormField label="Average" name="average" id="average" value={formValues.average} onChange={changeFormValue} />
        <Button type="submit">Add</Button>
      </Positioner>
    </ViewWrapper>
  );
};

export default AddUser;
