import React from 'react';
import { MessagesWrapper, Message, MessageTitle, MessageDescription, MessageInfo } from './Messages.styles';

const Messages = ({ data }) => {
  return (
    <MessagesWrapper>
      {data
        .slice(0)
        .reverse()
        .map((message) => (
          <Message>
            <MessageTitle>{message.title}</MessageTitle>
            <MessageDescription>{message.description}</MessageDescription>
            <MessageInfo>{`${message.author} - ${message.date}`}</MessageInfo>
          </Message>
        ))}
    </MessagesWrapper>
  );
};

export default Messages;
