import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { NotesWrapper, StyledTitle, NotesForm, NotesContent } from './Notes.styles';

const Notes = () => {
  const receviedNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm();

  const handleAddNote = (object) => {
    const { title, content } = object;
    reset();
    dispatch(addNote({ title, content }));
  };

  return (
    <NotesWrapper>
      <StyledTitle>Teacher's Notes</StyledTitle>
      <NotesForm as="form" onSubmit={handleSubmit(handleAddNote)}>
        <FormField label="Title" name="login" id="login" {...register('title')} />
        <FormField label="Content" name="content" id="content" isArea {...register('content')} />
        <Button isBig>Add note</Button>
      </NotesForm>
      <NotesContent>
        {receviedNotes.length > 0 ? (
          receviedNotes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesContent>
    </NotesWrapper>
  );
};

export default Notes;
