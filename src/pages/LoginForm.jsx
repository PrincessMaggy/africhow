import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordEye from "../assets/Vector.png";
import "../onboardingloginsignup.css";
import OnboardingWelcome from "../components/OnboardingWelcome";
import OnboardingButton from "../components/OnboardingButton";
import Header from "../components/Header";
import Loader from "../components/LoaderOnboarding";

const style =
  "rounded-xl px-[12px] w-[420px] line-[24px] py-[13px] text-white text-14px";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isValid, isDirty } = formState;
  const navigate = useNavigate();
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(data) {
    console.log(data);
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 500));
    setIsLoading(false)
    if(newUser){
      navigate("/account setup");
    }else{
      navigate("/login successful");
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleClick (e){
    e.preventDefault();
    reset();//this resets the form fields on toggle between the current page and login page
    setNewUser(prev => !prev)
  }
  return (
  <>
    <div className="grid gap-6 w-[358px] mx-auto relative">
      {newUser && <Header />}
      <div className="grid items-end">
        <OnboardingWelcome
          title={newUser ? "Create your business account":"Welcome Back!"}
          text={"Join the AfriChow community now..."}
        />
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="grid gap-2">
          <label className="label text flex gap-2">
            Email Address <span className="text-[#CB0000]">*</span></label>
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
          </div>
          

          <span className="text-red-500 text-[12px]">
            {errors?.email && errors?.email?.message}
          </span>
          <div className="grid gap-2">
          <label className="label text-[12px] flex gap-2">
            Password <span className="text-[#CB0000]">*</span></label>
            <div className="input flex gap-2 items-center">
              <input
                className="w-full focus:outline-none appearance-none bg-transparent"
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message:
                      "Password must be at least 8 characters and must include at least one letter, one digit, and one special character.",
                  },
                })}
              />
              <img
                src={PasswordEye}
                alt="eye icon"
                className="w-[16.41px] h-[11.67px] bg-red-800"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          
          <span className="text-red-500 text-[12px]">
            {errors?.password && errors?.password?.message}
          </span>
          {!newUser && (<span className="flex text-[#145062] text-[12px] justify-end">
            <Link to="/forgot password">Forgot Password ?</Link>
          </span>)}
          <OnboardingButton text={newUser ? "Create Account" :"Login"}/>
          <span className={`underline text-[15px] font-medium mx-auto ${newUser ? 'w-[179px]': 'w-[237px]'}`}>
            {newUser ?  "Have an Account?": "Don't have an Account"} <button onClick={handleClick}>{newUser? 'Login': 'Sign up' }</button>
          </span>
        </form>
      </div>
    </div>
    {isLoading && <Loader />}
  </>
  );
}
