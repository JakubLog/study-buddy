import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const shrinkAnimation = keyframes`
    from {
        transform: translateX(-50%) scaleX(1);
    }
    to {
        transform: translateX(-50%) scaleX(0);
    }
`;

const slideIn = keyframes`
    from {
        transform: translate(-50%, 500%);
    }
    to {
        transform: translate(-50%, 0%);
    }
`;

const slideOut = keyframes`
    from {
        transform: translate(-50%, 0%);
    }
    to {
        transform: translate(-50%, 500%);
    }
`;

const ErrorWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  padding: 30px 25px 25px 25px;
  border: 3px solid ${({ theme }) => theme.colors.error};
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  animation: ${slideIn} 3s, ${slideOut} 3s 8s forwards;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    border-radius: 15px;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.error};
  }
  &::before {
    opacity: 0.5;
  }
  &::after {
    transform-origin: left top;
    transform: translateX(-50%) scaleX(1);
    animation: ${shrinkAnimation} 5s 3s forwards;
  }
`;

const ErrorTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

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
