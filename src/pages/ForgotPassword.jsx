import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OnboardingButton from "../components/OnboardingButton";
import OnboardingWelcome from "../components/OnboardingWelcome";
import "../onboardingloginsignup.css";
import Prev from "../components/Prev";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ForgotPassword() {
  const [errorMessage, setErrorMessage] = useState(null)
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const resetLink = async (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:5174/login'
    }).then(() =>{
      //toast.success('Password reset email sent successfully');
    }).catch((error) => {
      console.log(error)
      // let customErrorMessage = "An error occurred"; // Default message
      // // Customize the error message based on the error code
      // if (error.code === "auth/user-not-found") {
      //   customErrorMessage = "User not found. Please check your email address.";
      // } else if (error.code === "auth/invalid-email") {
      //   customErrorMessage = "Invalid email address format.";
      // } // Add more customizations for other error codes
      setErrorMessage(error.message);
     
      toast.error(error);
    })
    //, 'Wrong email address or User does not exist'
  }

  function onSubmit(data) {
    const {email} = data;
    resetLink(email);
    reset();
  }

  function handlePrev(){
    navigate("/login");
  }

  return (
    <div className="grid gap-6 min-[391px]:w-[90%] max-[398px]:w-[358px] mx-auto">
      <Prev onClick={handlePrev}/>
      <ToastContainer />
      <OnboardingWelcome
        title={"Forgot Password?"}
        text={"A link will be sent to your email to reset your password."}
      />
      {!errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="label text grid gap-2">
          Email Address
          <input
            type="email"
            id="email"
            placeholder="sarahjohn@gmail.com"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            className="input"
          />
        </label>

        <span className="text-red-500 text-[12px]">
          {errors?.email && errors?.email?.message}
        </span>
        <OnboardingButton text={"Next"} />
      </form>
    </div>
  );
}
