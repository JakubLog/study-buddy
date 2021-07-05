import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext({
  users: [],
  deleteUser: () => {},
  addNewUser: () => {},
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
      .catch((err) => console.error(err));
  }, []);

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
