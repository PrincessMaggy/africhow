import {createContext, useContext, useEffect, useState} from 'react';
import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '../../../firebase';


const UserContext = createContext();
const db = getFirestore();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null); // Start with no user


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      return user; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
          alert('Sign out successful')
          setUser(null);
      })
      .catch((err) => {
          alert(err);
      });
  };

  // Function to fetch user details based on UID
  const fetchUserDetailsFromDatabase = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        return userData;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const alreadyLoggedInUser = auth.currentUser;

    if (alreadyLoggedInUser) {
      fetchUserDetailsFromDatabase(alreadyLoggedInUser.uid).then((userDetails) => {
        setUser({ ...alreadyLoggedInUser, userDetails });
      });
    } else {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          const userDetails = await fetchUserDetailsFromDatabase(currentUser.uid);
          setUser({ ...currentUser, userDetails });
        } else {
          setUser(null);
        }
    });

        return () => unsubscribe();
      }
    }, []); 

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
