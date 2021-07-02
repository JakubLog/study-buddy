import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import UserList from 'components/organisms/UserList/UserList';
import { UserShape } from 'types';

const Dashboard = ({ deleteUser, users }) => {
  return (
    <ViewWrapper>
      <UserList deleteUser={deleteUser} users={users} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default Dashboard;
