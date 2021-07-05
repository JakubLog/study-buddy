import React from 'react';
import { ReactComponent as IconDelete } from 'assets/icons/delete-icon.svg';
import { ReactComponent as IconMessage } from 'assets/icons/message-icon.svg';
import { ReactComponent as IconOpinion } from 'assets/icons/opinion-icon.svg';
import { StyledButton } from './IconButton.styles';

const decide = (type) => {
  switch (type) {
    case 'DELETE':
      return <IconDelete />;
    case 'MESSAGE':
      return <IconMessage />;
    case 'OPINION':
      return <IconOpinion />;
    default:
      return <IconDelete />;
  }
};

const IconButton = (props) => <StyledButton {...props}>{decide(props.type)}</StyledButton>;

export default IconButton;
