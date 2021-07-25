import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = ({ login, password }) => auth.signInWithEmailAndPassword(login, password);
  const signOut = () => auth.signOut();

  const value = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{isLoading ? <p>Loading...</p> : children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Auth can't be used here. Find place with context.");
  }

  return auth;
};

export default useAuth;
