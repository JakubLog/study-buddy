import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = ({ onChange, value, name, label, type = 'text', id }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} type={type} id={id} onChange={onChange} value={value} />
  </Wrapper>
);

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;