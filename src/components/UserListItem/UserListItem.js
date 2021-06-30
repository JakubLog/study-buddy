import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { name, attendance, average } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
  </li>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
  }),
};

export default UserListItem;
