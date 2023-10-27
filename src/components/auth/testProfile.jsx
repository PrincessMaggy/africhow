import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Profilenav from "../../components/Profilenav";

export default function Workhours({ userData }) {
  // Initialize state with user data
  const [formData, setFormData] = useState({
    Firstname: userData.firstName || "",
    Lastname: userData.lastName || "",
    Businessname: userData.businessName || "",
    Storeaddress: userData.storeAddress || "",
  });

  // Create a function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // When the user clicks on the "Edit" button
  const handleEditClick = () => {
    // Here, you can enable editing mode or simply keep the user's details in the form.
  };

  // When the user clicks on the "Save" button
  const handleSaveClick = () => {
    // Here, you can update the user's data in Firebase with the new values from the `formData` state.
  };

  // When the user clicks on the "Cancel" button
  const handleCancelClick = () => {
    // You can cancel the editing or reset the form to its initial state.
    setFormData({
      Firstname: userData.firstName || "",
      Lastname: userData.lastName || "",
      Businessname: userData.businessName || "",
      Storeaddress: userData.storeAddress || "",
    });
  };

  return (
    <div className="grid gap-3 w-[200px]  relative">
      <div className="grid items-end">
        <form className="grid gap-3">
          <div className="grid gap-2">
            <label className="label text flex gap-2 mt-3">First name</label>
            <input
              type="text"
              name="Firstname" // Make sure to set the name attribute to match the state key
              placeholder="Michael"
              value={formData.Firstname}
              onChange={handleInputChange}
              required
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-2">
            <label className="label text flex gap-2">Last Name</label>
            <input
              type="text"
              name="Lastname"
              placeholder="Ibrahim"
              value={formData.Lastname}
              onChange={handleInputChange}
              required
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-2">
            <label className="label text flex gap-2">Business name</label>
            <input
              type="text"
              name="Businessname"
              placeholder="Alex's Diner"
              value={formData.Businessname}
              onChange={handleInputChange}
              required
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-2">
            <label className="label text flex gap-2">Business address</label>
            <input
              type="text"
              name="Storeaddress"
              placeholder="1234 N.Compass Way"
              value={formData.Storeaddress}
              onChange={handleInputChange}
              required
              className="input w-[80px] h-[30px]"
            />
          </div>

          <Profilenav text="Edit" onClick={handleEditClick} />
        </form>
      </div>
    </div>
  )
}