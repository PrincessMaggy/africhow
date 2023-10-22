import OnboardingWelcome from './OnboardingWelcome'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordEye from "../assets/Vector.png";
import OnboardingButton from "./OnboardingButton";
import Header from "./Header";
import "../onboardingloginsignup.css";

export default function ConfirmPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState } = useForm();
    const { errors, isValid, isDirty } = formState;
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    function onSubmit(data) {
    console.log(data);
    navigate("/form");
    }

    function onError(errors) {
    console.log(errors);
    }
  return (
    <div className="grid gap-6 w-[358px] mx-auto">
        <OnboardingWelcome 
            title={'Reset Password'}
            text={'Input the fields below to set up new password'}
        />
        <form className="grid gap-3 w-[358px]" onSubmit={handleSubmit(onSubmit, onError)}>
            <label className="label text-[12px] grid gap-2">
                Password
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
            </label>
            <span className="text-red-500 text-[12px]">
                {errors?.password && errors?.password?.message}
            </span>

            <label className="label text-[12px] grid gap-2">
                Confirm Password
                <div className="input flex gap-2 items-center">
                <input
                    className="w-full focus:outline-none appearance-none bg-transparent"
                    type={showPassword ? "text" : "password"}
                    id="confirmpassword"
                    {...register("confirmpassword", {
                    required: "Required",
                    pattern: {
                        value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                        "Password must be the same",
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
            </label>
            <span className="text-red-500 text-[12px]">
                {errors?.confirmpassword && errors?.confirmpassword?.message}
            </span>
        </form>
        <OnboardingButton 
            text={'Reset Password'}
        />
    </div>
  )
}


        {/* <OnboardingWelcome 
            className={'flex flex-col justify-center items-center'} 
            text={'You have successfully changed your password. Please use the new password when logging in'} 
            title={'Password Reset Successful'}
        />
        <OnboardingButton 
            text={'Login Now'}
        /> */}  