import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers/handlers';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

const server = setupServer(...handlers);

describe('SerchBar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('Checks render component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Find student');
  });
  it('Checks searchBar is working', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
  });
  it('Checks hintBox is empty when the input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'ad' } });
    const record = await screen.findByText(/Adam Romański/);
    fireEvent.change(input, { target: { value: '' } });
    expect(record).not.toBeInTheDocument();
  });
});
