import {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import HomeNav from "../components/homeNav";
import CameraIcon from "../assets/icons/photo_camera.svg";

function AddMealItem() {
    const initialMealItem = {
        name: '',
        cost: '',
        location: '',
        status: '',
    };
    const [mealItem, setMealItem] = useState(initialMealItem);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMealItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addMealItem = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'meals'), {
                name: mealItem.name,
                cost: mealItem.cost,
                location: mealItem.location,
                status: mealItem.status,
            });

            console.log('Document written with ID: ', docRef.id);
            alert('Meal created successfully!');
            setMealItem(initialMealItem); // Reset fields after successful submission
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <HomeNav />
            <hr className='border-gray-400 -mt-6' />

            <div className='mx-8 bg-gray-200 px-32 flex flex-col justify-center items-center py-24 mt-12 mb-2'>
                <img src={ CameraIcon } alt="" srcset="" />
                <p>Upload Image</p>
            </div>
            <p className='mx-8 text-left text-[12px] text-gray-300 mb-10'>Recommended size: 1080 x 1920</p>
            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                onSubmit={addMealItem}
            >
                <div className='mb-4'>
                    {/*<label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='name'
                    >
                        Name of meal
                    </label>*/}

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
                    {/*<label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='location'
                    >
                        Location
                    </label>*/}
                    <select
                        id='status'
                        name='status'
                        onChange={handleChange}
                        value={mealItem.status}
                        className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900'>
                        <option value=''>Category <span></span></option>
                        <option value='Category 1'>north african cuisine </option>
                        <option value='Category 2'>south african cuisine</option>
                        <option value='Category 3'>west african cuisine</option>
                        <option value='Category 3'>east african cuisine</option>
                        <option value='Category 3'>central african cuisine</option>
                        <option value='Category 3'>special dishes</option>
                    
                    </select>
                </div>

                <div className='mb-4 flex gap-4 w-full'>
                    {/*<label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='cost'>
                        Cost
                    </label>*/}
                    <select
                        id='cost'
                        name='cost'
                        onChange={handleChange}
                        value={mealItem.status}
                        className=' border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-2/6 focus:ring-blue-900 focus:border-blue-900 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900 uppercase'>

                        <option value='Category 1'>$ USD </option>
                        <option value='Category 2'>$ CAD</option>
                        <option value='Category 3'>£ Pounds</option>
                    
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

                {/*<label
                    htmlFor='status'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Select an option
                </label>*/}
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
                        className='bg-lime-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8'
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
