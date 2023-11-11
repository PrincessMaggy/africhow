
import { useState, useEffect } from 'react';
import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {doc, getDoc } from 'firebase/firestore';
import Layout from '../components/Layout';
import UpdateData from '../components/UpdateData';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../components/auth/AuthContext';
import Profilenavbar from "../components/Profilenavbar"


const EditProfile = () => {
  const { user } = UserAuth();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the user data to edit
    const fetchData = async () => {
      try {
        // Ensure user is not null before accessing uid
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            setItem({
              id: userSnapshot.id,
              ...userSnapshot.data(),
            });
          }
        } else {
          console.error('User is null.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div>
      <Layout>
      <Profilenavbar
            text={'Vendor details '}

            hour={'Working hours'}
            />
        {item ? (
          <>
            <UpdateData
              type="profile"
              itemData={item}
              storagePath="user-images"
              collectionPath="users"
              style="px-8" 
              mode="profile"
            />
            
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </Layout>
    </div>
  );
};

export default EditProfile