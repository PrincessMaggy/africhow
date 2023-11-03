import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import { auth } from '../../../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Start with no user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
          alert('Sign out successful');
      })
      .catch((err) => {
          alert(err);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const alreadyLoggedInUser = auth.currentUser;

    if (alreadyLoggedInUser) {
      setUser(alreadyLoggedInUser);
    } else {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null); // No user is signed in
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
