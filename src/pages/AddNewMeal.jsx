import React from 'react';
import AddItemToFirebase from './AddItemToFirebase'; // Import the new component

function AddMealItem() {
  const initialMealItem = {
    name: '',
    category: '',
    currency: '',
    cost: '',
    status: '',
  };

  return (
    <>
    <AddItemToFirebase
      collectionPath="meals" // Specify the Firestore collection path
      initialItem={initialMealItem}
      navigateBackUrl={`/meallisting/${auth.currentUser.uid}`}
      successMessage="Meal created successfully!"
    />
    <hr className='border-gray-400 -mt-6' />

    <div
        className={`upload_image mx-8 py-12 mt-12 mb-2 cursor-pointer ${
            imageUploaded ? 'image-preview-bg' : 'bg-gray-200'
        }`}
    >
        <input
            type='file'
            accept='image/*'
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
                value={mealItem.image}
                className='w-164 image-preview'
            />
            <p className='text-xs md:text-base'>
                {imageUploaded
                    ? 'Image Successfully Uploaded'
                    : 'Upload Image'}
            </p>
        </label>
    </div>
    <p className='mx-8 text-left text-[12px] text-gray-500 mb-10'>
        Recommended size: 1080 x 1920
    </p>
    <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={addMealItem}
    >
        <div className='mb-4'>
            <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'
            ></label>

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
                htmlFor='category'
            ></label>
            <select
                id='category'
                name='category'
                onChange={handleChange}
                value={mealItem.category}
                autoComplete='current-category'
                className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#227e63] focus:border-[#227e63] block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700'
            >
                <option value=''>Category</option>
                <option value='north african'>
                    north african cuisine{' '}
                </option>
                <option value='south african'>
                    south african cuisine
                </option>
                <option value='west african'>
                    west african cuisine
                </option>
                <option value='east african'>
                    east african cuisine
                </option>
                <option value='central african'>
                    central african cuisine
                </option>
                <option value='special dishes'>special dishes</option>
            </select>
        </div>

        <div className='mb-4 flex gap-1 w-full'>
            <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='currency'
            ></label>
            <select
                id='currency'
                name='currency'
                onChange={handleChange}
                value={mealItem.currency}
                autoComplete='current-currency'
                className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#227e63] focus:border-[#227e63] block p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700 '
            >
                <option value=''> Currency </option>
                <option value='$'> USD </option>
                <option value='CAD'> CAD </option>
                <option value='£'> Pounds </option>
            </select>
            <input
                className='w-5/6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
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
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        ></label>
        <select
            id='status'
            name='status'
            onChange={handleChange}
            value={mealItem.status}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#227e63] focus:border-[#227e63] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700'
        >
            <option value=''>Status</option>
            <option value='Available'>Available</option>
            <option value='Not Available'>Not Available</option>
        </select>

        <div className='flex items-center justify-between'>
            <button
                className='bg-[#228768] hover:bg-black hover:text-[#33cc9f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8'
                type='submit'
            >
                Add item
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

    <Footer />
    </>
  );
}

export default AddMealItem;
