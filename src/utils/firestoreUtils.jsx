import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { storage, db } from '../../firebase';

export const uploadImageToStorage = async (imageFile, user, storagePath) => {
    if (!imageFile) {
      return '';
    }

    try {
      const timestamp = new Date().getTime();
      const uniqueId = Math.random().toString(36).substring(7);
      const imageFileName = `${timestamp}_${uniqueId}.jpg`;

      const imageRef = ref(storage, `${storagePath}/${user.uid}/${imageFileName}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      return imageUrl;
    } catch (err) {
      console.error('Error uploading image: ' + err.message);
      return '';
    }
  };

export const updateItemInFirestore = async (itemData, user, collectionPath) => {
  try {
    const collectionRef = doc(db, 'users', user.uid, collectionPath, itemData.id);
    console.log("Updating item with data:", itemData);
    await updateDoc(collectionRef, itemData);
  
      return true;
    } catch (err) {
      console.error(`Error updating user in Firestore: ${err.message}`);
      return false;
    }
   };


// Function to update a user document in Firestore
export const updateUserInFirestore = async (userData, user) => {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, userData);
  
      return true;
    } catch (err) {
      console.error(`Error updating user in Firestore: ${err.message}`);
      return false;
    }
  };


  export const addItemToFirestore = async (itemData, user, collectionPath) => {
    try {
      const itemDocRef = collection(db, `${collectionPath}/${user.uid}`);
      await addDoc(itemDocRef, itemData);
  
      return true;
    } catch (err) {
      console.error('Error adding item to Firestore: ' + err.message);
      return false;
    }
  };
  
