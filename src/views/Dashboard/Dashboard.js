import React from 'react';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import UserList from 'components/organisms/UserList/UserList';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UserList />
    </ViewWrapper>
  );
};

export default Dashboard;
