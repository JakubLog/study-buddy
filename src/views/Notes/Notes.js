import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';
import { NotesWrapper, StyledTitle, NotesForm, NotesContent } from './Notes.styles';

const Notes = () => {
  const { data, isLoading } = useGetNotesQuery();
  const [addNote, rest] = useAddNoteMutation();

  const { register, reset, handleSubmit } = useForm();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
    reset();
  };

  return (
    <NotesWrapper>
      <StyledTitle>Teacher's Notes</StyledTitle>
      <NotesForm as="form" onSubmit={handleSubmit(handleAddNote)}>
        <FormField label="Title" name="login" id="login" {...register('title')} />
        <FormField label="Content" name="content" id="content" isArea {...register('content')} />
        {rest.isSuccess ? <p>Dodano pomyślnie</p> : null}
        <Button isBig>Add note</Button>
      </NotesForm>
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : (
        <NotesContent>
          {data.notes.length > 0 ? (
            data.notes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesContent>
      )}
    </NotesWrapper>
  );
};

export default Notes;
