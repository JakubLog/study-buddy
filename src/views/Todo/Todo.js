import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import { TodoWrapper, StyledTitle, TodoForm, TodoContent, TodoItemsWrapper, TodoActive, TodoUnactive } from './Todo.styles';
import { useForm } from 'react-hook-form';
import TodoItem from 'components/molecules/TodoItem/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from 'store';
import { useGetTodosQuery } from 'store';
import { useAddTodoMutation } from 'store';

const Todo = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addTodo, rest] = useAddTodoMutation();
  const { data: todos, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleAddTask = ({ task, content }) => {
    addTodo({ title: task, description: content });
    reset();
  };

  const decideAboutTodoCategory = (boolean, obj) => {
    if (boolean) {
      const activeTasks = todos.todos.filter((todo) => todo.isActive === boolean);
      if (!activeTasks.length) {
        return <p>No active tasks now.</p>;
      }
      return activeTasks.map((item) => <TodoItem isActive id={item.id} key={item.id} task={item.title} content={item.description} />);
    } else {
      const unactiveTasks = todos.todos.filter((todo) => todo.isActive === boolean);
      if (!unactiveTasks.length) {
        return <p>No unactive tasks now.</p>;
      }
      return unactiveTasks.map((item) => <TodoItem id={item.id} key={item.id} task={item.title} content={item.description} />);
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
