import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddItemToFirebase({
  collectionPath,
  initialItem,
  navigateBackUrl,
  successMessage,
}) {
  const [item, setItem] = useState(initialItem);
  const [imageFile, setImageFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImageUrl(e.target.result);

        setItem((prev) => ({
          ...prev,
          imageUrl: e.target.result,
        }));

        setImageFile(file);
        setImageUploaded(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const uploadImageToStorage = async () => {
    if (!imageFile) {
      return '';
    }

    try {
      const timestamp = new Date().getTime();
      const uniqueId = Math.random().toString(36).substring(7);
      const imageFileName = `${timestamp}_${uniqueId}.jpg`;

      const imageRef = ref(storage, `images/${auth.currentUser.uid}/${imageFileName}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      return imageUrl;
    } catch (err) {
      alert('Error uploading image: ' + err.message);
      return '';
    }
  };

  const addItemToFirestore = async () => {
    try {
      const imageUrl = await uploadImageToStorage();
      await addDoc(collection(db, collectionPath), {
        userId: auth.currentUser.uid,
        ...item,
        imageUrl: imageUrl,
      });

      toast.success(successMessage);
      setItem(initialItem);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default AddItemToFirebase;
