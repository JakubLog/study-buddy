import React, { useState } from 'react';
import { usersData } from 'data/users.js';

export const UserContext = React.createContext({
  users: [],
  deleteUser: () => {},
  addNewUser: () => {},
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  const addNewUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        deleteUser,
        addNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
