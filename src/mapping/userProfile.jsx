import React, { useState, useEffect } from "react";
import Workhours from "../components/auth/testProfile";
import { useAuth } from "./AuthContext"; // Replace with your actual authentication context

export default function UserProfile() {
  const { currentUser } = useAuth(); // Use your authentication context
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if a user is authenticated
    if (currentUser) {
      // Fetch user data based on the currentUser's unique ID
      // Replace this with actual code to fetch user data from your database
      const userUID = currentUser.uid;

      // Simulate fetching user data
      setTimeout(() => {
        const fetchedData = {
          firstName: "John",
          lastName: "Doe",
          businessName: "My Business",
          storeAddress: "123 Main St",
        };
        setUserData(fetchedData);
      }, 1000); // Simulate a delay for data fetching
    }
  }, [currentUser]);

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <Workhours userData={userData} />
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
