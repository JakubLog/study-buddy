import React from 'react';
import PropTypes from 'prop-types';
import { useRemoveNoteMutation } from 'store';
import { NoteWrapper, NoteTitle, NoteContent, NoteButton } from './Note.styles';

const Note = ({ title, content, id }) => {
  const [removeNote, rest] = useRemoveNoteMutation();

  const handleDeleteNote = () => removeNote({ id });
  return (
    <NoteWrapper>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <NoteButton type="DELETE" aria-label="Note delete button" onClick={handleDeleteNote} />
    </NoteWrapper>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Note;
