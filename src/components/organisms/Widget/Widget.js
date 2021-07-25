import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetNotesQuery } from 'store';
import { WidgetWrapper, WidgetButton, NotesWrapper, TodoWrapper, ElementsWrapper } from './Widget.styles';
import TodoItem from 'components/molecules/TodoItem/TodoItem';

const NotesWidget = () => {
  const [isExpanded, setExpandedState] = React.useState(false);
  const todos = useSelector((state) => state.todos);
  const { data, isLoading } = useGetNotesQuery();

  const toggleState = () => setExpandedState((prev) => (prev = !prev));

  const getActiveTodos = (obj) => {
    const activeTasks = todos.filter((todo) => todo.isActive === true);
    if (!activeTasks.length) {
      return <p>No active tasks now.</p>;
    }
    return activeTasks.map((item) => <TodoItem isActive id={item.id} key={item.id} task={item.task} content={item.content} />);
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
        <TodoWrapper>{getActiveTodos(todos)}</TodoWrapper>
      </ElementsWrapper>
    </WidgetWrapper>
  );
};

export default NotesWidget;