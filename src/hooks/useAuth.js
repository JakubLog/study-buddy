import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        const response = await axios.get('/me', { headers: { authorization: `Bearer ${token}` } });
        if (response) setUser(response.data);
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Auth can't be used here. Find place with context.");
  }

  return auth;
};

export default useAuth;
