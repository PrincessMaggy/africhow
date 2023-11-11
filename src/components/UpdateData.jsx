import React, { useState, useEffect } from 'react';
import { UserAuth } from '../components/auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadImageToStorage, updateItemInFirestore, updateUserInFirestore } from '../utils/firestoreUtils';
import MealForm from '../hooks/MealForm';
import ProfileForm from '../hooks/ProfileForm';
import SelectInput from '../utils/selectInput';


const UpdateDataComponent = ({ type, itemData, collectionPath, style, mode, categoryOptions, currencyOptions,statusOptions, storagePath }) => {
  const { user } = UserAuth();

  const [item, setItem] = useState({
    name: '',
    category: '',
    currency: '',
    cost: '',
    status: '',
    image: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false);
   const [ loading , setLoading] = useState (false);

  useEffect(() => {
    if (itemData) {
      setItem(itemData);
    }
  }, [itemData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setItem((prevData) => ({
          ...prevData,
          imageUrl: e.target.result,
        }));

        setUploadedImageUrl(e.target.result);
        setImageUploaded(true);
        setImageFile(file);
      };

      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (item && mode === 'meal') {
        const imageUrl = await uploadImageToStorage(imageFile, user);
        if (await updateItemInFirestore(item, user, collectionPath, imageUrl)) {
          toast.success('Meal updated successfully');
        } else {
          toast.error('Failed to update the meal');
        }
      } else if (item && mode === 'profile') {
        const imageUrl = await uploadImageToStorage(imageFile, user);
        if (await updateUserInFirestore(item, user, imageUrl)) {
          toast.success('Profile updated successfully');
        } else {
          toast.error('Failed to update the profile');
        }
      }
    } catch (error) {
      console.error('Error updating/adding item or user:', error);
      toast.error('Error updating/adding item or user');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <>
      <ToastContainer />
      {loading && (
            <div className='loading-overlay'>
                <div className='loader flex justify-center items-center h-full text-[1.2rem]'>
                    Loading...
                </div>
            </div>
        )}
      {mode === 'meal' && (
        <MealForm
          mode={mode}
          handleImageUpload={handleImageUpload}
          imageUploaded={imageUploaded}
          uploadedImageUrl={uploadedImageUrl}
          item={item}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          style={style}
          categoryOptions={categoryOptions}
          currencyOptions={currencyOptions}
          statusOptions={statusOptions}
        />
        )}

        {mode === 'profile' && (
          <ProfileForm
            item={item}
            handleInputChange={handleInputChange}
            handleImageUpload={handleImageUpload}
            handleFormSubmit={handleFormSubmit}
            style={style}
            imageUploaded={imageUploaded}
            uploadedImageUrl={uploadedImageUrl}
          />
        )}

    </>
  );
}


export default UpdateDataComponent
