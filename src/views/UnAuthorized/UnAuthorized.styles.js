import styled from 'styled-components';

export const Form = styled.form`
  & > * {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
