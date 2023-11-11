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


    const createUser = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Fetch the user details from Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
  
        if (userDoc.exists()) {
          setUser({ uid: user.uid, ...userDoc.data() });
        } else {
          console.error('User document not found in Firestore');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      return user; 
    } catch (error) {
      console.error('Error signing in:', error);
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
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.error('User document not found in Firestore');
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
    }, [auth]); 

    return (
        <UserContext.Provider value={{
          createUser, 
          user, 
          logout, 
          signIn, 
          fetchUserDetailsFromDatabase 
          }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
