import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useSelector } from 'react-redux';
import { WidgetWrapper, WidgetButton, NotesWrapper } from './NotesWidget.styles';

const NotesWidget = () => {
  const [isExpanded, setExpandedState] = React.useState(false);
  const receviedNotes = useSelector((state) => state.notes);

  const toggleState = () => setExpandedState((prev) => (prev = !prev));

  return (
    <WidgetWrapper isExpanded={isExpanded}>
      <WidgetButton onClick={toggleState} isBig>
        Notes
      </WidgetButton>
      <NotesWrapper>
        {receviedNotes.length > 0 ? (
          receviedNotes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>No notes found yet.</p>
        )}
      </NotesWrapper>
    </WidgetWrapper>
  );
};

export default NotesWidget;
