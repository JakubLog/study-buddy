import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Wrapper } from './Authorized.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Notes from '../Notes/Notes';
import Todo from '../Todo/Todo';
import Feed from 'views/Feed/Feed';

const Authorized = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/group/" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes/">
            <Notes />
          </Route>
          <Route path="/todolist/">
            <Todo />
          </Route>
          <Route path="/feed/:id">
            <Feed />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default Authorized;
