import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBnm-jNCKxjbEOESWJ_mtSNS6OBX06Dpmw',
    authDomain: 'africhow-47096.firebaseapp.com',
    projectId: 'africhow-47096',
    storageBucket: 'africhow-47096.appspot.com',
    messagingSenderId: '231406576720',
    appId: '1:231406576720:web:ce278d64e47223a70f5d55',
    measurementId: 'G-T1NCL81G0V',
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
