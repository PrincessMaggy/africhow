import OnboardingWelcome from "../components/OnboardingWelcome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordEye from "../assets/eye-slash.png";
import PasswordEye2 from "../assets/Icon.png";
import Prev from "../components/Prev";
import OnboardingButton from "../components/OnboardingButton";
import "../onboardingloginsignup.css";
import Loader from "../components/LoaderOnboarding";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updatePassword } from "firebase/auth";

export default function ConfirmPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors, isValid, isDirty } = formState;
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   function onSubmit(data) {
  //     console.log(data);
  //     setIsLoading(true);
  //     navigate("/password%20reset%20successful");
  //     setIsLoading(false);
  //   }

  function onSubmit(data) {
    const { password, confirmpassword } = data;

    if (password !== confirmpassword) {
      // Passwords don't match
      onError({ confirmpassword: "Passwords do not match" });
    } else {
      // Passwords match, proceed to the next page
      setIsLoading(true);
      navigate("/password%20reset%20successful");
      setIsLoading(false);
    }
  }
  function handlePrev() {
    navigate("/login");
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="relative">
      <Prev onClick={handlePrev} />
      <div className="grid gap-6 min-[391px]:w-4/5 max-[390px]:w-[358px] mx-auto">
        <OnboardingWelcome
          title={"Reset Password"}
          text={"Input the fields below to set up new password"}
        />
        <form
          className="grid gap-3 max-[390px]:w-[358px] max-[950px]:full w-4/5 mx-auto "
          onSubmit={handleSubmit(onSubmit, onError)}
        >
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
              {/* <img
                src={PasswordEye}
                alt="eye icon"
                className="w-[16.41px] h-[11.67px]"
                onClick={togglePasswordVisibility}
              /> */}
              <span
                className="w-[16.41px] h-[11.67px]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={PasswordEye2} />
                ) : (
                  <img src={PasswordEye} />
                )}
              </span>
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
                    message: "Password must be the same",
                  },
                })}
              />
              {/* <img
                src={PasswordEye}
                alt="eye icon"
                className="w-[16.41px] h-[11.67px]"
                onClick={togglePasswordVisibility}
              /> */}
              <span
                className="w-[16.41px] h-[11.67px]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={PasswordEye2} />
                ) : (
                  <img src={PasswordEye} />
                )}
              </span>
            </div>
          </label>
          <span className="text-red-500 text-[12px]">
            {errors?.confirmpassword && errors?.confirmpassword?.message}
          </span>
          <OnboardingButton text={"Reset Password"} />
        </form>
      </div>
      {isLoading && <Loader />}
    </div>
  );
}
