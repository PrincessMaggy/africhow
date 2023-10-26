import React, { useState } from "react";
import Saveprofilebutton from "./Saveprofilebutton"
import circle from '../assets/ProfileImg/checkcircle.png';
import Error from "../assets/ProfileImg/error.png";
import { useForm, Controller } from "react-hook-form";



export default function Profileform() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const onSubmit = (data) => {
  // Check for errors
  let hasErrors = false;

  if (!data.fname || !data.lname || !data.bname || !data.Badress || !data.Bemail || !data.bemail || !data.bphone || !data.HOA) {
    setError("Please fill out all required fields.");
    hasErrors = true;
  } else {
    setError("");
  }

  if (data.bname && data.bname.length > 50) {
    setError("Business name cannot exceed 50 characters.");
    hasErrors = true;
  } else {
    setError("");
  }

  if (!hasErrors) {
    // Handle form submission here
    // If successful, display success message
    setSuccess("Your changes have been successfully saved");
  }
};

return (
  <>
    {error && (
      <div className="m-5">
        <div className="w-[300px] h-72 border m-auto rounded shadow">
          <h1 className="text-bold font-medium m-3 text-red-400">Error</h1>
          <p className="m-3 text-sm font-normal">{error}</p>
          <img src={Error} className="ml-12" alt="Error Icon" />
        </div>
      </div>
    )}

    {success && (
      <div className="m-5">
        <div className="w-[300px] h-72 border m-auto rounded shadow">
          <h1 className="text-bold font-medium m-3 text-green-200">Success</h1>
          <p className="m-3 text-sm font-normal">{success}</p>
          <img src={circle} className="ml-12" alt="Success Icon" />
        </div>
      </div>
    )}

    <div className="grid gap-3 relative">
    <div className="grid items-end">
          <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">First name</label>
              <Controller
                name="fname"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Michael"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.fname && <p className="error">{errors.fname.message}</p>}
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Last name</label>
              <Controller
                name="lname"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Ibrahim"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.lname && <p className="error">{errors.lname.message}</p>}
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">business name</label>
              <Controller
                name="bname"
                control={control}
                rules={{ required: "Business name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Alex's diner"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.bname && <p className="error">{errors.bname.message}</p>}
            </div>


            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Business Address</label>
              <Controller
                name="Badress"
                control={control}
                rules={{ required: "Business address is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="1234 N.Compass Way"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.Badress && <p className="error">{errors.Baddress.message}</p>}
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">  Business email</label>
              <Controller
                name="Bemail"
                control={control}
                rules={{ required: "  Business email is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Dave@alexdiner.com"
                    className="input  w-[50px]  h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.Bemail && <p className="error">{errors.Bemail.message}</p>}
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">Comfirm business email</label>
              <Controller
                name="bemail"
                control={control}
                rules={{ required: "Business email is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Dave@alexdiner.com"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.bemail && <p className="error">{errors.bemail.message}</p>}
            </div>


            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3"> Business phone number </label>
              <Controller
                name="bphone"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    type="tel"
              placeholder="+1(916) 555-5555"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.bphone && <p className="error">{errors.bphone.message}</p>}
            </div>

            <div className="grid gap-2">
              <label className="label text flex gap-2 mt-3">  Hours of Availability </label>
              <Controller
                name="HOA"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
              placeholder="Monday-Sat 9:00-10:00pm"
                    className="input  w-[50px] h-[30px]"
                    {...field}
                  />
                )}
              />
              {errors.HOA && <p className="error">{errors.HOA.message}</p>}
            </div>

            <Saveprofilebutton/>

            </form>
        </div>
      </div>
    </>
  );
}


