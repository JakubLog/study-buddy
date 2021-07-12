import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import { NoteWrapper, NoteTitle, NoteContent, NoteButton } from './Note.styles';

const Note = ({ title, content, id }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => dispatch(removeNote({ id }));
  return (
    <NoteWrapper>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <NoteButton type="DELETE" onClick={handleDeleteNote} />
    </NoteWrapper>
  );
};

export default Note;
