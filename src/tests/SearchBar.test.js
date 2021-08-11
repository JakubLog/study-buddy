import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import SearchBar from '../components/organisms/SearchBar/SearchBar';

describe('SerchBar', () => {
  it('Checks render component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Find student');
  });
  // it('Checks searchBar is working', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Find student');
  //   fireEvent.change(input, { target: { value: 'a' } });
  //   await screen.findByText(/Ramona/);
  // });
  // it('Checks hintBox is empty when the input is empty', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Find student');
  //   fireEvent.change(input, { target: { value: 'lo' } });
  //   const record = await screen.findByText(/Lonnie Deckow/);
  //   fireEvent.change(input, { target: { value: '' } });
  //   expect(record).not.toBeInTheDocument();
  // });
});
