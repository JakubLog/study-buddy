import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorTitle } from './ErrorMessage.styles';

const defaultMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage = ({ message = defaultMessage }) => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oops!</ErrorTitle>
      <p>{message}</p>
    </ErrorWrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
