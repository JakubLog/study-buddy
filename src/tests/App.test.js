import React from 'react';
import App from '../views/App';
import { render, screen, fireEvent, waitFor } from 'test-utils';

describe('App components', () => {
  it('Render component', async () => {
    render(<App />);
    await screen.findByText('Login');
  });
  it('Showing error when bad input in unauthorized page', async () => {
    render(<App />);
    const login = await screen.findByLabelText('Login');
    const password = await screen.findByLabelText('Password');
    fireEvent.change(login, { target: { value: 'dksao@dsa.com' } });
    fireEvent.change(password, { target: { value: 'sdfsd' } });

    fireEvent.click(await screen.findByText('Login in'));

    await screen.findByText(/Oops!/i);
  });
  it('Can login in', async () => {
    render(<App />);
    const login = await screen.findByLabelText('Login');
    const password = await screen.findByLabelText('Password');
    fireEvent.change(login, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'test123456' } });

    fireEvent.click(await screen.findByText('Login in'));

    waitFor(() => screen.findByText(/Lonnie/i));
  });
});
