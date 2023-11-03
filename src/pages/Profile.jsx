import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { db, auth } from '../../firebase';
import {
  doc,
  setDoc,
} from 'firebase/firestore';

import OnboardingWelcome from '../components/OnboardingWelcome';
import Header from '../components/Header';
import Loader from '../components/LoaderOnboarding';

import { Countries } from '../phone/countrycode';
import Layout from '../components/Layout';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  // Fetch user's data and populate the profile fields
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userUID = user.uid;
      const userDocRef = doc(db, 'users', userUID);

      // Fetch user data from Firestore
      const fetchUserData = async () => {
        try {
          const userSnapshot = await userDocRef.get();
          if (userSnapshot.exists()) {
            setUserProfile(userSnapshot.data());
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
  }, []);

  const handleCountryChange = (e) => {
    const value = e.target.value.slice(0, 2);
    setSelectedCountry(e.target.value.slice(2));
    // ...
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    setSelectedCity(e.target.value);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      handleSubmit(onSubmit)();
    } else {
      toast.error('Please accept the terms to continue.');
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const user = auth.currentUser;
    if (user) {
      const userUID = user.uid;
      const userDocRef = doc(db, 'users', userUID);

      const additionalUserInfo = {
        firstname: data.Firstname,
        lastname: data.Lastname,
        phonenumber: data.phonenumber,
        businessname: data.Businessname,
        storeaddress: data.Storeaddress,
        country: selectedCountry,
        city: selectedCity,
        // Add other user data fields here
      };

      // Update user data in Firestore
      try {
        await setDoc(userDocRef, additionalUserInfo, { merge: true });
        toast.success('User data updated successfully.');
        navigate('/profile-updated-successfully');
      } catch (error) {
        console.error('Error updating user data:', error);
        toast.error('Error updating user data');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Layout>
        <div className='relative' />
        <div className=' mx-auto min-[391px]:w-4/5 max-[390px]:w-[358px] flex flex-col gap-3'>
            <OnboardingWelcome
            title={'Edit Your Profile'}
            text={'Update your profile information'}
            className={'welcome'}
            />
            <form className="grid gap-3 w-full mb-12">
                <div className="grid gap-2">
                    <label className="label text flex gap-2">
                    First Name <span className="text-[#CB0000]">*</span>
                    </label>
                    <input
                    type="text"
                    id="Firstname"
                    placeholder="Sarah"
                    {...register('Firstname', {
                        required: 'Required',
                        pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Invalid first name',
                        },
                    })}
                    className="input"
                    defaultValue={userProfile.Firstname || ''}
                    />
                    <span className="text-red-500 text-[12px]">
                    {errors?.Firstname && errors?.Firstname?.message}
                    </span>
                </div>
                <div className="grid gap-2">
                    <label className="label text flex gap-2">
                    Last Name <span className="text-[#CB0000]">*</span>
                    </label>
                    <input
                    type="text"
                    id="Lastname"
                    placeholder="John"
                    {...register('Lastname', {
                        required: 'Required',
                        pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Invalid last name',
                        },
                    })}
                    className="input"
                    defaultValue={userProfile.lastName || ''}
                    />
                    <span className="text-red-500 text-[12px]">
                    {errors?.Lastname && errors?.Lastname?.message}
                    </span>
                </div>
                <div className="grid gap-2 parentinput">
                    <label className="font-[500] text-[#000F08] w-full max-[390px]:text-[12px] text text-left justify-start flex gap-2">
                    Phone Number <span className="text-[#CB0000]">*</span>
                    </label>
                    <span className="flex justify-between w-full max-[390px]:w-[358px] mx-auto">
                    <select
                        className="border max-[390px]:w-[71px] w-[30%]"
                        defaultValue={userProfile.country || ''}
                        onChange={handleCountryChange}
                    >
                        <option value="Country" disabled>
                        Country
                        </option>
                        {countries?.map((country) => (
                        <option key={country.id} value={country.iso2}>
                            {country.iso2}, {country.name}
                        </option>
                        ))}
                    </select>
                    <input
                        className="max-[390px]:w-[278px] w-[50%] border"
                        type="text"
                        id="phonenumber"
                        placeholder="08012345678"
                        {...register('phonenumber', {
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{10,}$/,
                            message: 'Phone number should be at least 10 characters',
                        },
                        })}
                        defaultValue={userProfile.phonenumber || ''}
                    />
                    </span>
                    <span className="text-red-500 text-[12px]">
                    {errors?.phonenumber && errors?.phonenumber?.message}
                    </span>
                </div>
                <div className="grid gap-2">
                    <label className="label text flex gap-2">
                    Business Name <span className="text-[#CB0000]">*</span>
                    </label>
                    <input
                    type="text"
                    id="Businessname"
                    placeholder="The SpiceKitchen"
                    {...register('Businessname', {
                        required: 'Required',
                    })}
                    className="input"
                    defaultValue={userProfile.Businessname || ''}
                    />
                    <span className="text-red-500 text-[12px]">
                    {errors?.Businessname && errors?.Businessname?.message}
                    </span>
                </div>
                <div className="grid gap-2">
                    <label className="label text flex gap-2">
                    Store Address <span className="text-[#CB0000]">*</span>
                    </label>
                    <input
                    type="text"
                    id="Storeaddress"
                    placeholder="Herbert Macaulay, Florida"
                    {...register('Storeaddress', {
                        required: 'Required',
                        pattern: {
                        value: /[A-Za-z0-9'.\s, -]/,
                        message: 'Invalid address',
                        },
                    })}
                    className="input"
                    defaultValue={userProfile.Storeaddress || ''}
                    />
                    <span className="text-red-500 text-[12px]">
                    {errors?.Storeaddress && errors?.Storeaddress?.message}
                    </span>
                </div>
                <div className="flex justify-between label parentinput gap-2">
                    <label className="justify-start text-left max-[390px]:w-[170px] w-full grid">
                    Country
                    <select
                        className="max-[390px]:w-[170px] w-4/5 border"
                        defaultValue={userProfile.selectedCountry || ''}
                        onChange={handleCountryChange}
                    >
                        <option value="Country" disabled>
                        Country
                        </option>
                        {countries?.map((country) => (
                        <option key={country.id} value={country.iso2}>
                            {country.iso2}, {country.name}
                        </option>
                        ))}
                    </select>
                    </label>
                    <label className="justify-end text-left grid max-[390px]:w-[170px] w-full">
                    City/Province
                    <select
                        className="max-[390px]:w-[170px] w-full border"
                        defaultValue={userProfile.selectedCity || ''}
                        value={selectedCity}
                        onChange={handleCityChange}
                    >
                        <option value="City" disabled>
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
            className='
            bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[8px] mb-20'
            onClick={handleButtonClick}
        >
            Update Profile
        </button>
      </Layout>
      
    </div>
  );
}
