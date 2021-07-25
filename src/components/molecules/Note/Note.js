import React from 'react';
import { useRemoveNoteMutation } from 'store';
import { NoteWrapper, NoteTitle, NoteContent, NoteButton } from './Note.styles';

const Note = ({ title, content, id }) => {
  const [removeNote, rest] = useRemoveNoteMutation();

  const handleDeleteNote = () => removeNote({ id });
  return (
    <NoteWrapper>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <NoteButton type="DELETE" onClick={handleDeleteNote} />
    </NoteWrapper>
  );
};

export default Note;
