import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { db, auth } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import OnboardingWelcome from '../components/OnboardingWelcome';
import Layout from '../components/Layout';
import Loader from '../components/LoaderOnboarding';


const Countries = [
  { id: 1, iso2: 'US', name: 'United States' },

];

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    Firstname: '',
    Lastname: '',
    phonenumber: '',
    Businessname: '',
    Storeaddress: '',
    country: 'US', // Default country, change as needed
  });

  const [cities, setCities] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userUID = user.uid;
          const userDocRef = doc(db, 'users', userUID);

          const userSnapshot = await getDoc(userDocRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserProfile({
              Firstname: userData.Firstname || '',
              Lastname: userData.Lastname || '',
              phonenumber: userData.phonenumber || '',
              Businessname: userData.Businessname || '',
              Storeaddress: userData.Storeaddress || '',
              country: userData.country || 'US', // Default country, change as needed
              city: userData.city || '',
            });
          } else {
            console.error('User document not found.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data');
        }
      }
    };

    fetchUserData();
  }, []);


  return (
    <div>
      <ToastContainer />
      <Layout>
        <div className='relative' />
        <div className='mx-auto min-[391px] max-[390px] w-[358px] flex flex-col gap-3'>
          <OnboardingWelcome
            title={'Edit Your Profile'}
            text={'Update your profile information'}
            className={'welcome'}
          />
          <form className='grid gap-3 w-full mb-12'>
            <div className='grid gap-2'>
              <label className='label text flex gap-2'>
                First Name <span className='text-[#CB0000]'>*</span>
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
                defaultValue={userProfile.firstname || ''}
              />
              <span className='text-red-500 text-[12px]'>
                {errors?.Firstname && errors?.Firstname?.message}
              </span>
            </div>
            <div className='grid gap-2'>
              <label className='label text flex gap-2'>
                Last Name <span className='text-[#CB0000]'>*</span>
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
                defaultValue={userProfile.lastname || ''}
              />
              <span className='text-red-500 text-[12px]'>
                {errors?.Lastname && errors?.Lastname?.message}
              </span>
            </div>
            <div className='grid gap-2 parentinput'>
              <label className='font-[500] text-[#000F08] w-full max-[390px] text-[12px] text text-left justify-start flex gap-2'>
                Phone Number <span className='text-[#CB0000]'>*</span>
              </label>
              <span className='flex justify-between w-full max-[390px] mx-auto'>
                <select
                  className='border max-[390px] w-[30%]'
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value='Country' disabled>
                    Country
                  </option>
                  {countries?.map((country) => (
                    <option key={country.id} value={country.iso2}>
                      {country.iso2}, {country.name}
                    </option>
                  ))}
                </select>
                <input
                  className='max-[390px] w-[278px] border'
                  type='text'
                  id='phonenumber'
                  placeholder='08012345678'
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
              <span className='text-red-500 text-[12px]'>
                {errors?.phonenumber && errors?.phonenumber?.message}
              </span>
            </div>
            <div className='grid gap-2'>
              <label className='label text flex gap-2'>
                Business Name <span className='text-[#CB0000]'>*</span>
              </label>
              <input
                type='text'
                id='Businessname'
                placeholder='The SpiceKitchen'
                {...register('Businessname', {
                  required: 'Required',
                })}
                className='input'
                defaultValue={userProfile.businessname || ''}
              />
              <span className='text-red-500 text-[12px]'>
                {errors?.Businessname && errors?.Businessname?.message}
              </span>
            </div>
            <div className='grid gap-2'>
              <label className='label text flex gap-2'>
                Store Address <span className='text-[#CB0000]'>*</span>
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
                defaultValue={userProfile.storeaddress || ''}
              />
              <span className='text-red-500 text-[12px]'>
                {errors?.Storeaddress && errors?.Storeaddress?.message}
              </span>
            </div>
            <div className='flex justify-between label parentinput gap-2'>
              <label className='justify-start text-left max-[39 w-full grid'>
                Country
                <select
                  className='max-[390px] w-4/5 border'
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value='Country' disabled>
                    Country
                  </option>
                  {countries?.map((country) => (
                    <option key={country.id} value={country.iso2}>
                      {country.iso2}, {country.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className='justify-end text-left grid max-[390px] w-[170px]'>
                City/Province
                <select
                  className='max-[390px] w-full border'
                  value={selectedCity}
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
