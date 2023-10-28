import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordEye from "../assets/eye-slash.png";
import PasswordEye2 from "../assets/Icon.png";
import "../onboardingloginsignup.css";
import OnboardingWelcome from "../components/OnboardingWelcome";
import OnboardingButton from "../components/OnboardingButton";
import Loader from "../components/LoaderOnboarding";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthDetails from "../components/auth/authDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { useAuth } from "../components/auth/AuthContext";

const style =
  "rounded-xl px-[12px] w-[420px] line-[24px] py-[13px] text-white text-14px";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
//   const [newUser, setNewUser] = useState(
//     location.state ? location.state.newUser : true
//   );
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isValid, isDirty } = formState;
  const mounted = useRef(false);
  const { loggedIn, setLoggedIn } = useAuth();
 
  useEffect(() => {
    mounted.current = true;
    return (() => {
      mounted.current = false;
    });
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/account setup");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err, "err");
        setLoginError(true);
        setErrorMessage(err.message)
        ///////
      });
  };
//   const setNewUserToFalse = () => {
//     setNewUser(false);
//   };

function onSubmit(data) {
  const { email, password } = data;
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate("/account%20setup");
      setLoggedIn(true)
    })
    .catch((err) => {
      console.log(err, "err");
      setSignupError(true);
      console.log(err.code)
      let customErrorMessage = "An error occurred";
      if (err.code === "auth/email-already-in-use") {
        customErrorMessage = "Existing user. Please login with your email address.";
      } 
      setErrorMessage(customErrorMessage);
      toast(errorMessage)
    })
    .finally(() => mounted.current && setIsLoading(false));
    reset();

  // setIsLoading(true);
  // // await new Promise((r) => setTimeout(r, 500));
  // // setIsLoading(false);
  // if (!loginError && errorMessage) {
  //   navigate("/account setup");
  // }
}

// function onSubmit(data) {
//   const { email, password } = data;
//   setIsLoading(true);
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log(userCredential);
//       navigate("/account%20setup");
//     })
//     .catch((err) => {
//       console.log(err, "err");
//       setSignupError(true);
//       setErrorMessage(err.message);
//       toast(err.message)
//     })
//     .finally(() => mounted.current && setIsLoading(false));
//     reset();

//   // setIsLoading(true);
//   // // await new Promise((r) => setTimeout(r, 500));
//   // // setIsLoading(false);
//   // if (!loginError && errorMessage) {
//   //   navigate("/account setup");
//   // }
// }
  function onError(errors) {
    console.log(errors);
    //alert(errors);
  }

  function handleClick(e) {
    e.preventDefault();
    reset(); //this resets the form fields on toggle between the current page and login page
    navigate('/login');
  }
  return (
    <>
      <div>
        {/* {newUser && <Nav setNewUserToFalse={setNewUserToFalse} />} */}
        
        <ToastContainer/>

        <div className="grid gap-6 min-[391px]:w-4/5 max-[398px]:w-[358px] min[391px]:text-[16px] mx-auto relative">
        <Header/>
        <div className="grid items-end">
            <OnboardingWelcome
              title={"Create your business account"}
              titleStyle='w-full text-[22px] font-[700] my-[15px]'
              text={"Join the AfriChow community now..."}
              className={"welcome"}
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
                {/* <FormInputs
                  label={"Email Address"}
                  name={"email"}
                  errorMessage={"invalid email address"}
                  pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                  placeholder={"sarahjohn@gmail.com"}
                /> */}
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
                        /^(?=.*[A-Za-z\d])(?=.*[!@#$%^&*.,><*])[A-Za-z\d!@#$%^&*,.><*]{8,}$/,
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
              </div>

              <span className="text-red-500 text-[12px]">
                {errors?.password && errors?.password?.message}
              </span>
              {/* {!newUser && (
                <span className="flex text-[#145062] text-[12px] justify-end">
                  <Link to="/forgot password">Forgot Password ?</Link>
                </span>
              )} */}
              <OnboardingButton text={"Create Account"} onClick={handleSignUp}/>
              <span
                className={`underline text-[15px] text-[#145062] font-medium mx-auto w-[250px]`}
              >
                Have an Account?{" "} 
                <span onClick={handleClick} className="cursor-pointer">
                   Login
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

