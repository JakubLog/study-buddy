import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useGetNotesQuery } from 'store';
import { WidgetWrapper, WidgetButton, NotesWrapper, TodoWrapper, ElementsWrapper } from './Widget.styles';
import TodoItem from 'components/molecules/TodoItem/TodoItem';
import { useGetTodosQuery } from 'store';

const NotesWidget = () => {
  const [isExpanded, setExpandedState] = React.useState(false);
  const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery();
  const { data, isLoading } = useGetNotesQuery();

  const toggleState = () => setExpandedState((prev) => (prev = !prev));

  const getActiveTodos = (obj) => {
    const activeTasks = todos.todos.filter((todo) => todo.isActive === true);
    if (!activeTasks.length) {
      return <p>No active tasks now.</p>;
    }
    return activeTasks.map((item) => <TodoItem isActive id={item.id} key={item.id} task={item.title} content={item.description} />);
  };

  return (
    <WidgetWrapper isExpanded={isExpanded}>
      <WidgetButton onClick={toggleState} isBig>
        Info
      </WidgetButton>
      <ElementsWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <NotesWrapper>
            {data.notes.length > 0 ? (
              data.notes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
            ) : (
              <p>No notes found yet.</p>
            )}
          </NotesWrapper>
        )}
        <TodoWrapper>{isTodosLoading ? <p>Loading...</p> : getActiveTodos(todos)}</TodoWrapper>
      </ElementsWrapper>
    </WidgetWrapper>
  );
};

export default NotesWidget;
