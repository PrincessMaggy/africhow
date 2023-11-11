import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UserAuth } from './auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, storage, auth } from '../../firebase';
import SelectInput from '../utils/selectInput';
import CameraIcon from '../assets/icons/photo_camera.svg';


function AddDataComponent({ collectionPath, initialData, style, storagePath, categoryOptions, currencyOptions, statusOptions}) {
    const { user } = UserAuth();
    const [data, setData] = useState(initialData);
    const [imageFile, setImageFile] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setData((prevData) => ({
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

  const uploadImageToStorage = async (imageFile, user) => {
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

  const addItemToFirestore = async (data, imageUrl, user) => {
    try {
      const collectionRef = collection(db, 'users', user.uid, collectionPath);
      const docRef = await addDoc
      (collectionRef, {
        userId: user.uid,
        name: data.name,
        category: data.category,
        currency: data.currency,
        cost: data.cost,
        status: data.status,
        imageUrl: imageUrl,
      });

      return docRef.id;
        } catch (err) {
            throw err.message;
        }
    };

    
      
    const addItem = async (e) => {
        e.preventDefault();
        setLoading(true);

     if (
            !data.name ||
            !data.category ||
            !data.currency ||
            !data.cost ||
            !data.status || 
            !data.firstName ||
            !data.lastName ||
            !data.businessEmail ||
            !data.phoneNumber ||
            !data.storeAddress ||
            !data.businessName ||
            !imageFile
        ) {
            toast.error('Please fill in all required fields');
            
            return;
        }

        try {
            const imageUrl = await uploadImageToStorage(
                imageFile,
                user,
            );
            const docId = await addItemToFirestore(
                data,
                imageUrl,
                user,
            );

            console.log('Document written with ID: ', docId);
            toast.success('Meal created successfully!');
            setMealItem(initialMealItem);
            setUserDetails(initialData);
            navigate(`/meallisting/$user.uid}`);
        } catch (err) {
            toast.error(err);
        } finally {
            setLoading(false);
        }
  };

  return (
    <>
      <ToastContainer />
      <div className='pb-8'>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{display: 'none'}}
                id='imageUploadInput'
            />
            <label
                htmlFor='imageUploadInput'
                className='flex flex-col justify-center items-center cursor-pointer'
            >
                <img
                    src={imageUploaded ? uploadedImageUrl : CameraIcon}
                    alt=''
                    srcSet=''
                    id='imagePreview'
                    name='image'
                    value={data.image}
                    className='w-164 image-preview'
                />
                <p className='text-xs md:text-base pt-3'>
                    {imageUploaded
                        ? 'Image Successfully Uploaded'
                        : 'Upload Image'}
                </p>
            </label>
        </div>
      
          <form className={style} onSubmit={addItem}>
            <div>
                <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                autoComplete='current-name'
                className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-3 text-gray-900 bg-white leading-tight"
                />
            </div>
            <div>
                <SelectInput
                id="category"
                name="category"
                value={data.category}
                onChange={handleChange}
                options={categoryOptions}
                placeholder="Category"
                autoComplete='current-category'
                />
            </div>

            <div className='flex w-full gap-1 justify-around'>
                <SelectInput
                className="border w-full px-12"
                id="currency"
                name="currency"
                value={data.currency}
                onChange={handleChange}
                options={currencyOptions}
                placeholder="Currency"
                autoComplete='current-currency'
                />
                <input
                    className='border h-11 w-full mt-2'
                    id='cost'
                    type='text'
                    name='cost'
                    value={data.cost}
                    onChange={handleChange}
                    placeholder='100'
                    autoComplete='current-cost'
                />
            </div>
            
            <div className='flex w-full gap-1 justify-between'>
                <SelectInput
                className="border"
                id="status"
                name="status"
                value={data.status}
                onChange={handleChange}
                options={statusOptions}
                placeholder="Status"
                autoComplete='current-status'
                />
            </div>
            
            
            <div className='flex items-center justify-between'>
                <button
                    className='bg-[#228768] hover:bg-black hover:text-[#33cc9f] text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8'
                    type='submit'
                >
                    Add
                </button>
            </div>
          </form>
      

        
      {loading && (
            <div className='loading-overlay'>
                <div className='loader flex justify-center items-center h-full text-[1.2rem]'>
                    Loading...
                </div>
            </div>
        )}
    </>
  );
}

export default AddDataComponent;