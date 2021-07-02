import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/user-event';
import { RenderWithProviders } from 'helpers/RenderWithProviders';
import Dashboard from 'views/Dashboard/Dashboard';
import AddUser from 'views/AddUser/AddUser';

it('Add user protocol', () => {
  RenderWithProviders(
    <>
      <AddUser />
      <Dashboard />
    </>
  );
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'TestedUser' } });
  fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '100%' } });
  fireEvent.change(screen.getByLabelText('Average'), { target: { value: '6.0' } });
  fireEvent.click(screen.getByText('Add'));
  screen.getByText('TestedUser');
});

d;
