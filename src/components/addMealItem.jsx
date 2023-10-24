import {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import { storage } from '../../firebase';
import HomeNav from "../components/homeNav";
import CameraIcon from "../assets/icons/photo_camera.svg";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function AddMealItem() {
    const initialMealItem = {
        name: '',
        currency: '',
        cost: '',
        status: '',
    };
    const [mealItem, setMealItem] = useState(initialMealItem);
    const [mealImageFile, setMealImageFile] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');


    const handleChange = (e) => {
        const {name, value} = e.target;
        setMealItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.src = e.target.result;
                setUploadedImageUrl(e.reader.result);

                setMealItem((prev) => ({
                    ...prev,
                    imageUrl: e.target.result,
                }));
                
                setUploadedImageUrl(e.target.result);
                setMealImageFile(file);
                setImageUploaded(true);
            };
    
            reader.readAsDataURL(file);
            setMealImageFile(file);
        }
    };

    const addMealItem = async (e) => {
        e.preventDefault();

        let imageUrl = '';

        // Upload the image to Firebase Storage
        if (mealImageFile) {
            try {
                const imageRef = ref(storage, 'meal-images', mealItem.name + '.jpg');
                await uploadBytes(imageRef, mealImageFile);
                imageUrl = await getDownloadURL(imageRef);
                mealItem.imageUrl = imageUrl; // Add the image URL to the meal item data
            } catch (err) {
                alert('Error uploading image: ' + err.message);
                return;
            }
        }

        // Add the meal item to Firestore
        try {

            const docRef = await addDoc(collection(db, 'meals'), {
                name: mealItem.name,
                category: mealItem.category,
                cost: mealItem.cost,
                status: mealItem.status,
                imageUrl: imageUrl,
            });

            console.log('Document written with ID: ', docRef.id);
            alert('Meal created successfully!');
            setMealItem(initialMealItem); // Reset fields after successful submission

        } catch (err) {
            alert(err.message);
        }
    };

    const placeholderImage = CameraIcon;

    return (
        <>
            <HomeNav />
            <hr className='border-gray-400 -mt-6' />

            <div className='upload_image mx-8 bg-gray-200 pt-32  py-24 mt-12 mb-2 cursor-pointer'>
                <input 
                    type='file' 
                    accept='image/*'
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    id='imageUploadInput'
                />
                <label htmlFor="imageUploadInput" className='flex flex-col justify-center items-center cursor-pointer'>
                    <img 
                        src={imageUploaded ? uploadedImageUrl : CameraIcon}
                        alt="" 
                        srcSet="" 
                        id='image'
                        name='image'
                        value= {mealItem.image}
                        onClick={() => document.getElementById('imageUploadInput').click()}  
                    />
                    <p className='text-xs md:text-base'>
                        {imageUploaded? 'Image Successfully Uploaded': 'Upload Image'}
                    </p>
                </label>
                
            </div>
            <p className='mx-8 text-left text-[12px] text-gray-500 mb-10'>Recommended size: 1080 x 1920</p>
            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                onSubmit={addMealItem}
            >
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='name'
                    >
                    </label>

                    <input
                        className='shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-3 text-gray-900 bg-white leading-tight '
                        id='name'
                        name='name'
                        type='text'
                        value={mealItem.name}
                        onChange={handleChange}
                        placeholder='Meal Name'
                        autoComplete='current-meal'
                    />
                </div>


                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='category'>
                    </label>
                    <select
                        id='category'
                        name='category'
                        onChange={handleChange}
                        value={mealItem.category}
                        className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900'>
                        <option value=''>Category</option>
                        <option value='north african'>north african cuisine </option>
                        <option value='south african'>south african cuisine</option>
                        <option value='west african'>west african cuisine</option>
                        <option value='east african'>east african cuisine</option>
                        <option value='central african'>central african cuisine</option>
                        <option value='special dishes'>special dishes</option>
                    
                    </select>
                </div>

                <div className='mb-4 flex gap-4 w-full'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='cost'>
                    </label>
                    <select
                        id='currency'
                        name='cost'
                        onChange={handleChange}
                        value={mealItem.cost}
                        className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-2/6 focus:ring-blue-900 focus:border-blue-900 block p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900 '>

                        <option value=''> Currency </option>
                        <option value='$'> USD </option>
                        <option value='CAD'> CAD </option>
                        <option value='£'> Pounds </option>
                    
                    </select>
                    <input
                        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-4/6'
                        id='cost'
                        type='text'
                        name='cost'
                        value={mealItem.cost}
                        onChange={handleChange}
                        placeholder='100'
                        autoComplete='current-cost'
                    />
                </div>

                <label
                    htmlFor='status'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                </label>
                <select
                    id='status'
                    name='status'
                    onChange={handleChange}
                    value={mealItem.status}
                    className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=''>Status</option>
                    <option value='Available'>Available</option>
                    <option value='Not Available'>Not Available</option>
                </select>

                <div className='flex items-center justify-between'>
                    <button
                        className='bg-[#228768] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8'
                        type='submit'
                    >
                        Add item
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddMealItem;