import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAI05thYl2JEsZg8rbf9xhlydog1dwzYPA",
    authDomain: "africhow-capstone-9ddf7.firebaseapp.com",
    projectId: "africhow-capstone-9ddf7",
    storageBucket: "africhow-capstone-9ddf7.appspot.com",
    messagingSenderId: "716871625901",
    appId: "1:716871625901:web:06ec3a7efb7efb4d6d2a24"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
