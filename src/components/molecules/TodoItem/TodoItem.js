/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemTitle, ItemContent, ItemButton } from './TodoItem.styles';
import { useChangeStateTodoMutation, useRemoveTodoMutation } from 'store';

const TodoItem = ({ task, content, isActive, id }) => {
  const [change, rest] = useChangeStateTodoMutation();
  const [remove, restTwo] = useRemoveTodoMutation();

  const changeTodo = (id) => change({ id });
  const removeTodo = (id) => {
    remove({ id });
    console.log('Stop');
  };

  return (
    <ItemWrapper>
      <ItemTitle>{task}</ItemTitle>
      <ItemContent>{content}</ItemContent>
      {isActive ? (
        <ItemButton aria-label="Todo change" onClick={() => changeTodo(id)}>
          Done
        </ItemButton>
      ) : (
        <ItemButton aria-label="Todo remove" onClick={() => removeTodo(id)}>
          Remove
        </ItemButton>
      )}
    </ItemWrapper>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default TodoItem;
