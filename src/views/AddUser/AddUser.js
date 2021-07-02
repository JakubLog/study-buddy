import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Positioner } from './AddUser.styles';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

const AddUser = ({ formValues, changeFormValue, addNewUser }) => {
  return (
    <ViewWrapper as="form" onSubmit={addNewUser}>
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

AddUser.propTypes = {
  formValues: PropTypes.object.isRequired,
  changeFormValue: PropTypes.func.isRequired,
  addNewUser: PropTypes.func.isRequired,
};

export default AddUser;
