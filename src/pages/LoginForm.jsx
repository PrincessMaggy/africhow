import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordEye from "../assets/Vector.png";
import "../onboardingloginsignup.css";
import OnboardingWelcome from "../components/OnboardingWelcome";
import OnboardingButton from "../components/OnboardingButton";
import Header from "../components/Header";
import Loader from "../components/LoaderOnboarding";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthDetails from "../../src/components/auth/authDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style =
  "rounded-xl px-[12px] w-[420px] line-[24px] py-[13px] text-white text-14px";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState(location.state ? location.state.newUser : true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isValid, isDirty } = formState;
  

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err, "err");
        setLoginError(true);
        //setErrorMessage('Invalid credentials')
      });
  };

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err, "err");
        setLoginError(true);
        //setErrorMessage('Invalid credentials')
      });
  };

  async function onSubmit(data) {
    //console.log(data);//tHIS DATA! needs to be pushed to the firebase DB
    const { email, password } = data;
    if (!newUser) {
      //handles signIn for existing users
      //console.log(email, password);
      handleSignIn(email, password);
    } else {
      handleSignUp(email, password);
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setIsLoading(false);
    if (!loginError) {
      newUser ? navigate("/account setup") : navigate("/login successful");
    }

    // if(newUser){
    //   navigate("/account setup");
    // }else{
    //   navigate("/login successful");
    // }
  }

  function onError(errors) {
    console.log(errors);
    //alert(errors);
  }

  function handleClick(e) {
    e.preventDefault();
    reset(); //this resets the form fields on toggle between the current page and login page
    setNewUser((prev) => !prev);
  }
  return (
    <>
      <div>
        {newUser && <Header />}
        <div className="grid gap-6 min-[391px]:w-4/5 max-[398px]:w-[358px] mx-auto relative">
          <div className="grid items-end">
            <OnboardingWelcome
              title={newUser ? "Create your business account" : "Welcome Back!"}
              text={"Join the AfriChow community now..."}
            />
            <form
              className="grid gap-3 "
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="grid gap-2">
                <label className="label text flex gap-2">
                  Email Address <span className="text-[#CB0000]">*</span>
                </label>
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
                  Password <span className="text-[#CB0000]">*</span>
                </label>
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
              {!newUser && (
                <span className="flex text-[#145062] text-[12px] justify-end">
                  <Link to="/forgot password">Forgot Password ?</Link>
                </span>
              )}
              <OnboardingButton text={newUser ? "Create Account" : "Login"} />
              <span
                className={`underline text-[15px] font-medium mx-auto ${
                  newUser ? "w-[179px]" : "w-[237px]"
                }`}
              >
                {newUser ? "Have an Account?" : "Don't have an Account"}{" "}
                <span  onClick={handleClick}>
                  {newUser ? "Login" : "Sign up"}
                </span>
              </span>
            </form>
          </div>
        </div>
        {isLoading && <Loader />}
      </div>
    </>
  );
}
