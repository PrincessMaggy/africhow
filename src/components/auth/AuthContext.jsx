import {createContext, useContext, useEffect, useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'; // Import Firebase authentication functions from the correct module

import {auth} from '../../../firebase'; // Import Firebase authentication instance from your configuration

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
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
        const authInstance = getAuth(); // Use getAuth() to get the Firebase authentication instance
        const alreadyLoggedInUser = authInstance.currentUser;

        if (alreadyLoggedInUser) {
            setUser(alreadyLoggedInUser);
        } else {
            const unsubscribe = onAuthStateChanged(
                authInstance,
                (currentUser) => {
                    if (currentUser) {
                        setUser(currentUser);
                    } else {
                        setUser(null); // No user is signed in
                    }
                },
            );

            return () => {
                unsubscribe();
            };
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
