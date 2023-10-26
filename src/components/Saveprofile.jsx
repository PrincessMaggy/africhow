import React, { useState } from "react";
import Profilerror from "./Profilerror"
import Profilesuccess from "./Profilesuccess"

export default function Saveprofile() {
  

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    businessName: '',
    businessAddress: '',
        businessEmail: '',
        confirmBusinessEmail: '',
        businessPhoneNumber: '',
        HoursOfAvailability:'',
   
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    if (formData.businessName.trim() === '') {
      setErrorMessage('Please fill in the Business Name field.');
    } else {
      // Perform your form submission logic here

      // If the submission is successful, display a success message
      setSuccessMessage('Your changes have been successfully saved');

      // Clear the form or reset as needed
      setFormData({
        firstName:'',
        lastName:'',
        businessName: '',
       businessAddress: '',
        businessEmail: '',
        confirmBusinessEmail: '',
        businessPhoneNumber: '',
        HoursOfAvailability:'', 
      });
    }
  };


  return (
    <>
      <div className="grid gap-3 relative">
      <div className="grid items-end">
          <form className="grid gap-3" onSubmit={handleSubmit} >
          <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">First name</label>
                  <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                     placeholder="Michael"
                     className="input w-[50px] h-[30px]"
                  />
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Last name</label>
                  <input
                     type="text"
                     id="lastName"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                     placeholder="Ibrahim"
                    className="input  w-[50px] h-[30px]"
                   
                  />
            </div>

        <div className="grid gap-2">
          <label className="label text flex gap-2 mt-3">Business name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Alex's diner"
            className="input w-[50px] h-[30px]"
           
          />
        </div>
        <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Business Address</label>
                  <input
                     type="text"
                     id="businessAddress"
                     name="businessAddress"
                     value={formData.businessAddress}
                     onChange={handleChange}
                    placeholder="1234 N.Compass Way"
                    className="input  w-[50px] h-[30px]"
                   
                  />
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">  Business email</label>
              
                  <input
                   type="text"
                   id="businessEmail"
                   name="businessEmail"
                   value={formData.businessEmail}
                   onChange={handleChange}
                    placeholder="Dave@alexdiner.com"
                    className="input  w-[50px]  h-[30px]"
                  />
    
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Confirm business email</label>
                  <input
                   type="text"
                   id="confirmBusinessEmail"
                   name="confirmBusinessEmail"
                   value={formData.confirmBusinessEmail}
                   onChange={handleChange}
                    placeholder="Dave@alexdiner.com"
                    className="input  w-[50px] h-[30px]"

                  />
            </div>
            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3"> Business phone number </label>
                  <input
                    type="tel"
                    id="businessPhoneNumber"
                    name="businessPhoneNumber"
                    value={formData.businessPhoneNumber}
                    onChange={handleChange}
              placeholder="+1(916) 555-5555"
                    className="input  w-[50px] h-[30px]"
                   
                  />
          
            
            </div>

            < div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">  Hours of Availability </label>
             
                  <input
                  type="text"
                  id="HOA"
                  name="HoursOfAvailability"
                  value={formData.HoursOfAvailability}
                  onChange={handleChange}
              placeholder="Monday-Sat 9:00-10:00pm"
                    className="input  w-[50px] h-[30px]"
                  
                  />

        <button className="text-[#909090] mt-5 text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"  onClick={handleSubmit}>
          Cancel
        </button>

        <button className="bg-[#145062]  text-[rgb(0,15,8)]  text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"   type="submit" onClick={handleSubmit}>
          Save changes
        </button>
      </div>
</form>
      
      </div>

      </div>
      
      <span>
          {errorMessage && <Profilerror message={errorMessage} />}
          {successMessage && <Profilesuccess message={successMessage} />}
        </span>
    </>
    
  );
}



















 
              
 


