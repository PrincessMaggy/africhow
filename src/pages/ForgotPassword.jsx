import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OnboardingButton from "../components/OnboardingButton";
import OnboardingWelcome from "../components/OnboardingWelcome";
import "../onboardingloginsignup.css";
import Prev from "../components/Prev";

export default function ForgotPassword() {
  const { register, handleSubmit, formState } = useForm();
  const { errors, isValid, isDirty } = formState;
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  function handlePrev(){
    navigate("/loginform", { state: { newUser: false } });
  }

  return (
    <div className="grid gap-6 min-[391px]:w-[90%] max-[398px]:w-[358px] mx-auto">
      <Prev onClick={handlePrev}/>
      <OnboardingWelcome
        title={"Forgot Password?"}
        text={"A link will be sent to your email to reset your password."}
      />
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit, onError)}>
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
      </form>
      <OnboardingButton text={"Next"} />
    </div>
  );
}
