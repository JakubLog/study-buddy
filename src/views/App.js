import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from 'views/AddUser/AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UserProvider from 'Providers/UserContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UserProvider>
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UserProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
