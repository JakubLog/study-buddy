import React, { useState } from 'react';
import { usersData } from 'data/users.js';
import Dashboard from './Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from 'views/AddUser/AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const changeFormValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
              <Route path="/add-user">
                <AddUser formValues={formValues} changeFormValue={changeFormValue} addNewUser={addNewUser} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
