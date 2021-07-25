import React from 'react';
import App from './App';
import { render, screen, fireEvent, waitFor } from 'test-utils';

describe('App components', () => {
  it('Render component', () => {
    render(<App />);
    screen.getByText('Login');
  });
  it('Showing error when bad input in unauthorized page', async () => {
    render(<App />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');
    fireEvent.change(login, { target: { value: 'dksao' } });
    fireEvent.change(password, { target: { value: 'sdfsd' } });

    fireEvent.click(screen.getByText('Login in'));

    await waitFor(() => screen.getByText('Oops!'));
  });
  it('Can login in', async () => {
    render(<App />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');
    fireEvent.change(login, { target: { value: 'kontakt.jakubfedoszczak@gmail.com' } });
    fireEvent.change(password, { target: { value: 'Kuba2007' } });

    fireEvent.click(screen.getByText('Login in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
