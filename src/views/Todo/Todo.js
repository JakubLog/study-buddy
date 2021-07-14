import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import { TodoWrapper, StyledTitle, TodoForm, TodoContent, TodoItemsWrapper, TodoActive, TodoUnactive } from './Todo.styles';
import { useForm } from 'react-hook-form';
import TodoItem from 'components/molecules/TodoItem/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from 'store';

const Todo = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTask = ({ task, content }) => {
    dispatch(addTodo({ task, content }));
    reset();
  };

  const decideAboutTodoCategory = (boolean, obj) => {
    if (boolean) {
      const activeTasks = todos.filter((todo) => todo.isActive === boolean);
      if (!activeTasks.length) {
        return <p>No active tasks now.</p>;
      }
      return activeTasks.map((item) => <TodoItem isActive id={item.id} key={item.id} task={item.task} content={item.content} />);
    } else {
      const unactiveTasks = todos.filter((todo) => todo.isActive === boolean);
      if (!unactiveTasks.length) {
        return <p>No unactive tasks now.</p>;
      }
      return unactiveTasks.map((item) => <TodoItem id={item.id} key={item.id} task={item.task} content={item.content} />);
    }
  };

  return (
    <TodoWrapper>
      <StyledTitle>Todolist</StyledTitle>
      <TodoForm as="form" onSubmit={handleSubmit(handleAddTask)}>
        <FormField label="What you have to do?" name="task" id="task" {...register('task')} />
        <FormField label="Write note about task" name="content" id="content" isArea {...register('content')} />
        <Button isBig>Add task</Button>
      </TodoForm>
      <TodoContent>
        <TodoActive>
          <StyledTitle style={{ borderBottom: '3px solid' }}>Todo</StyledTitle>
          <TodoItemsWrapper>{decideAboutTodoCategory(true, todos)}</TodoItemsWrapper>
        </TodoActive>
        <TodoUnactive>
          <StyledTitle style={{ borderBottom: '3px solid' }}>Done</StyledTitle>
          <TodoItemsWrapper>{decideAboutTodoCategory(false, todos)}</TodoItemsWrapper>
        </TodoUnactive>
      </TodoContent>
    </TodoWrapper>
  );
};

export default Todo;
