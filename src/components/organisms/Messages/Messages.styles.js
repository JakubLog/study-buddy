import styled from 'styled-components';

export const MessagesWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.purple};
  padding: 15px 25px;
  position: relative;
  &::after {
    content: 'Group Messages';
    position: absolute;
    top: -15px;
    font-weight: bold;
    background-color: white;
    padding-inline: 10px;
    font-size: 20px;
    right: 40px;
  }
`;
export const Message = styled.div`
  position: relative;
  padding-bottom: 30px;
  &:first-child {
    margin-top: 15px;
  }
  &:not(:last-child) {
    margin-bottom: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkPurple};
  }
  * {
    margin: 0;
  }
`;
export const MessageTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  padding-left: 10px;
`;
export const MessageDescription = styled.p`
  letter-spacing: 1px;
  line-height: 1.2;
`;
export const MessageInfo = styled.p`
  opacity: 0.6;
  position: absolute;
  right: 5px;
  bottom: 10px;
`;
