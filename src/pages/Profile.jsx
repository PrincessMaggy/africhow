import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from 'react-router-dom';
import {db, auth} from '../../firebase';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import ProfileImg from '../assets/images/family.png';
import Layout from '../components/Layout';
import Loader from '../components/LoaderOnboarding';

// Replace this with your Countries data
const Countries = [
    {id: 1, iso2: 'US', name: 'United States'},
    // Add more countries as needed
];

export default function Profile() {
    const {userId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({
        Firstname: '',
        Lastname: '',
        phonenumber: '',
        Businessname: '',
        Storeaddress: '',
        country: 'US',
    });

    const [cities, setCities] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const {register, handleSubmit, formState} = useForm();
    const {errors} = formState;
    const navigate = useNavigate();

    // Load user's data and populate the form
    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const fetchUserData = async () => {
                try {
                    const userDocRef = doc(db, 'users', auth.currentUser.uid);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        setUserProfile({
                            Firstname: userData.Firstname,
                            Lastname: userData.Lastname,
                            phonenumber: userData.phonenumber,
                            Businessname: userData.Businessname,
                            Storeaddress: userData.Storeaddress,
                            country: userData.country,
                        });
                    } else {
                        console.error('User document not found.');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    toast.error('Error fetching user data');
                }
            };
            fetchUserData();
        }
    }, [userId]);

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        // Update the country in the state
        setUserProfile({...userProfile, country: selectedCountry});
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        // Update the city in the state
        setCities({...cities, selectedCity});
    };

    const handleButtonClick = () => {
        handleSubmit(onSubmit)();
    };

    const updateUserData = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const imageUrl = await uploadImageToStorage(
                mealImageFile,
                auth.currentUser,
            );
            await updateUserDataInFirestore(userProfile, auth.currentUser);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = async (data) => {
        setIsLoading(true);

        const updateUserProfileInFirestore = async (
            userProfile,
            currentUser,
        ) => {
            try {
                const userDocRef = doc(db, 'users', auth.currentUser.uid);
                await updateDoc(userDocRef, {
                    name: userProfile.firstName,
                    category: userProfile.lastName,
                    currency: userProfile.businessName,
                    cost: userProfile.storeAddress,
                });

                toast.success('User data updated successfully.');
                navigate('/profile-updated-successfully');
            } catch (error) {
                console.error('Error updating user data:', error);
                toast.error('Error updating user data');
            }
        };

        await updateUserProfileInFirestore(userProfile, auth.currentUser);
        await updateUserData(e);
    };

    return (
        <div>
            <ToastContainer />
            <Layout>
                <div className='relative' />
                <div className='mx-auto min-[391px] w-4/5 max-[390px] flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img
                            src={ProfileImg}
                            alt=''
                            className='w-36 h-36 rounded-full mb-12'
                        />
                    </div>
                    <form
                        className='grid gap-3 w-full mb-12'
                        onSubmit={updateUserData}
                    >
                        <div className='grid gap-2'>
                            <label className='label text flex gap-2'>
                                First Name{' '}
                                <span className='text-[#CB0000]'>*</span>
                            </label>
                            <input
                                type='text'
                                id='Firstname'
                                placeholder='Sarah'
                                {...register('Firstname', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: 'Invalid first name',
                                    },
                                })}
                                className='input'
                                value={userProfile.firstName}
                                onChange={(e) =>
                                    setUserProfile({
                                        ...userProfile,
                                        Firstname: e.target.value,
                                    })
                                }
                            />
                            <span className='text-red-500 text-[12px]'>
                                {errors?.Firstname &&
                                    errors?.Firstname?.message}
                            </span>
                        </div>
                        <div className='grid gap-2'>
                            <label className='label text flex gap-2'>
                                Last Name{' '}
                                <span className='text-[#CB0000]'>*</span>
                            </label>
                            <input
                                type='text'
                                id='Lastname'
                                placeholder='John'
                                {...register('Lastname', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: 'Invalid last name',
                                    },
                                })}
                                className='input'
                                value={userProfile.lastName}
                                onChange={(e) =>
                                    setUserProfile({
                                        ...userProfile,
                                        Lastname: e.target.value,
                                    })
                                }
                            />
                            <span className='text-red-500 text-[12px]'>
                                {errors?.Lastname && errors?.Lastname?.message}
                            </span>
                        </div>
                        <div className='grid gap-2 parentinput'>
                            <label className='font-[500] text-[#000F08] w-full max-[390px] text-[12px] text text-left justify-start flex gap-2'>
                                Phone Number{' '}
                                <span className='text-[#CB0000]'>*</span>
                            </label>
                            <span className='flex justify-between w-full max-[390px] mx-auto'>
                                <select
                                    className='border max-[390px] w-[71px]'
                                    value={userProfile.country}
                                    onChange={handleCountryChange}
                                >
                                    <option value='Country' disabled>
                                        Country
                                    </option>
                                    {Countries.map((country) => (
                                        <option
                                            key={country.id}
                                            value={country.iso2}
                                        >
                                            {country.iso2}, {country.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    className='max-[390px] w-[75%] border'
                                    type='text'
                                    id='phonenumber'
                                    placeholder='08012345678'
                                    {...register('phonenumber', {
                                        required: 'Required',
                                        pattern: {
                                            value: /^[0-9]{10,}$/,
                                            message:
                                                'Phone number should be at least 10 characters',
                                        },
                                    })}
                                    value={userProfile.phonenumber}
                                    onChange={(e) =>
                                        setUserProfile({
                                            ...userProfile,
                                            phonenumber: e.target.value,
                                        })
                                    }
                                />
                            </span>
                            <span className='text-red-500 text-[12px]'>
                                {errors?.phonenumber &&
                                    errors?.phonenumber?.message}
                            </span>
                        </div>
                        <div className='grid gap-2'>
                            <label className='label text flex gap-2'>
                                Business Name{' '}
                                <span className='text-[#CB0000]'>*</span>
                            </label>
                            <input
                                type='text'
                                id='Businessname'
                                placeholder='The SpiceKitchen'
                                {...register('Businessname', {
                                    required: 'Required',
                                })}
                                className='input'
                                value={userProfile.businessName}
                                onChange={(e) =>
                                    setUserProfile({
                                        ...userProfile,
                                        Businessname: e.target.value,
                                    })
                                }
                            />
                            <span className='text-red-500 text-[12px]'>
                                {errors?.Businessname &&
                                    errors?.Businessname?.message}
                            </span>
                        </div>
                        <div className='grid gap-2'>
                            <label className='label text flex gap-2'>
                                Store Address{' '}
                                <span className='text-[#CB0000]'>*</span>
                            </label>
                            <input
                                type='text'
                                id='Storeaddress'
                                placeholder='Herbert Macaulay, Florida'
                                {...register('Storeaddress', {
                                    required: 'Required',
                                    pattern: {
                                        value: /[A-Za-z0-9'.\s, -]/,
                                        message: 'Invalid address',
                                    },
                                })}
                                className='input'
                                value={userProfile.storeAddress}
                                onChange={(e) =>
                                    setUserProfile({
                                        ...userProfile,
                                        Storeaddress: e.target.value,
                                    })
                                }
                            />
                            <span className='text-red-500 text-[12px]'>
                                {errors?.Storeaddress &&
                                    errors?.Storeaddress?.message}
                            </span>
                        </div>
                        <div className='flex justify-between label parentinput gap-2'>
                            <label className='justify-start text-left max-[390px] w-full grid'>
                                Country
                                <select
                                    className='max-[390px] w-4/5 border'
                                    value={userProfile.country}
                                    onChange={handleCountryChange}
                                >
                                    <option value='Country' disabled>
                                        Country
                                    </option>
                                    {Countries.map((country) => (
                                        <option
                                            key={country.id}
                                            value={country.iso2}
                                        >
                                            {country.iso2}, {country.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className='text-left grid max-[390px] w-full'>
                                City/Province
                                <select
                                    className='max-[390px] w-full border'
                                    value={userProfile.city}
                                    onChange={handleCityChange}
                                >
                                    <option value='City' disabled>
                                        City
                                    </option>
                                    {cities?.map((city) => (
                                        <option key={city.id} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </form>
                </div>
                {isLoading && <Loader />}
                <button
                    className='bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[8px] mb-20'
                    onClick={handleButtonClick}
                >
                    Update Profile
                </button>
            </Layout>
        </div>
    );
}
