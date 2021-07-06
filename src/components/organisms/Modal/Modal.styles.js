import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 600px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 42px 30px;
  box-shadow: 0 5px 20px -12px ${({ theme }) => theme.colors.black};
`;

export const ModalBackgound = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  background-color: ${({ theme }) => theme.colors.black};
`;
