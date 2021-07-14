import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemTitle, ItemContent, ItemButton } from './TodoItem.styles';
import { changeStateTodo as Change, removeTodo as Remove } from 'store';
import { useDispatch } from 'react-redux';

const TodoItem = ({ task, content, isActive, id }) => {
  const dispatch = useDispatch();

  const changeTodo = (id, task, content) => dispatch(Change({ id, task, content }));
  const removeTodo = (id) => dispatch(Remove({ id }));

  return (
    <ItemWrapper>
      <ItemTitle>{task}</ItemTitle>
      <ItemContent>{content}</ItemContent>
      {isActive ? (
        <ItemButton onClick={() => changeTodo(id, task, content)}>Done</ItemButton>
      ) : (
        <ItemButton onClick={() => removeTodo(id)}>Remove</ItemButton>
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
