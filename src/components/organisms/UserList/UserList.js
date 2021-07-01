import React, { useState, useEffect } from 'react';
import { usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject(new Error('Error :/'));
      }
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoadingState] = useState(true);
  const [isEmpty, setEmptyState] = useState(true);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setIsLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setIsLoadingState(false);
        data.length ? setEmptyState(false) : setEmptyState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('Loading state has changed');
  }, [isLoading]);

  useEffect(() => {
    users.length ? setEmptyState(false) : setEmptyState(true);
  }, [users]);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List:'}</h1>
      <p>{isEmpty ? 'Pusto wszędzie... Głucho wszędzie...' : ''}</p>
      <StyledList>
        {users.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

// class UserList extends React.Component {
//   state = {
//     users: [],
//     isLoading: true,
//   };

//   componentDidMount() {
//
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.isLoading !== this.state.isLoading) {
//       console.log('IsLoading state has been changed');
//     }
//   }
// }

export default UserList;
