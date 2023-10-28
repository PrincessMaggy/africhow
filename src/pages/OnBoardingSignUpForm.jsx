import PasswordEye from "../assets/Vector.png";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Countries } from "../phone/countrycode";
import OnboardingButton from "../components/OnboardingButton";
import axios from "axios";
import OnboardingWelcome from "../components/OnboardingWelcome";
import "../onboardingloginsignup.css";
import { db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc, runTransaction } from 'firebase/firestore';
import Nav from "../components/homeNav";
import Loader from "../components/LoaderOnboarding";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function OnBoardingSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  // const [countries, SetCountries] = useState([]);
  // const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [isChecked, setIsChecked] = useState(false)
  const [query, setQuery] = useState("AF");
  const { register, handleSubmit, formState } = useForm();
  const { errors, isValid, isDirty } = formState;
  const navigate = useNavigate();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.countrystatecity.in/v1/countries",
      headers: {
        "X-CSCAPI-KEY":
          "cTg3cGhFY3dnQjQyb0lONmpETnhaVlMwOHlQWjB5ZEcwcjVjQVJzTw==",
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err, "err");
        console.log(err.code);
        setLoginError(true);
        let customErrorMessage = "An error occurred";
        if (err.code === "auth/invalid-login-credentials") {
          customErrorMessage =
            "Fill in all required fields";
        }
        toast(customErrorMessage);
      })
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://api.countrystatecity.in/v1/countries/${query}/cities`,
      headers: {
        "X-CSCAPI-KEY":
          "cTg3cGhFY3dnQjQyb0lONmpETnhaVlMwOHlQWjB5ZEcwcjVjQVJzTw==",
      },
    };

    axios(config)
      .then(function (response) {
        setCities(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query]);

  const handleCountryChange = (e) => {
    const value = e.target.value.slice(0, 2);
    setQuery(value);
    setSelectedCountry(e.target.value.slice(2));
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    setSelectedCity(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);

    // Create a new user document in the Firestore "users" collection
    try {
      const user = auth.currentUser;
      if (user) {
        const userUID = user.uid;

        const userDocRef = doc(db, 'users', userUID);
        const mealsCollectionRef = collection(userDocRef, 'meals');

        await runTransaction(db, async () => {
          await setDoc(userDocRef, {
          firstName: data.Firstname,
          lastName: data.Lastname,
          businessName: data.Businessname,
          storeAddress: data.Storeaddress,
          // Add other user data fields here
        });

        // Create the "meals" subcollection
        await addDoc(mealsCollectionRef, { exampleField: 'exampleValue' });
    });

      console.log('Document written with ID: ', userUID);
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }


  //function onSubmit(data) {
    console.log(data);
    const { Firstname, Lastname, phonenumber, Businessname, Storeaddress } =
      data;
    const userUID = auth.currentUser.uid;
    const additionalUserInfo = {
      firstname: Firstname,
      lastname: Lastname,
      phonenumber: phonenumber,
      businessname: Businessname,
      storeaddress: Storeaddress,
      country: selectedCountry,
      city: selectedCity,
    };
    const userDocRef = doc(db, "users", userUID);
    setIsLoading(true);

    const updateUserDetails = async () => {
      try {
        await setDoc(userDocRef, additionalUserInfo);
        toast("User data updated successfully.");
        navigate("/account%20created%20successfully");
      } catch (error) {
        console.error("Error updating user data:", error);
        toast(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    updateUserDetails();
  }

  function onError(errors) {
    console.log(errors);
  }


  return (
    <div>
      <ToastContainer />
      <div className="relative" />

      <div className=" mx-auto min-[391px]:w-4/5 max-[390px]:w-[358px] flex flex-col gap-3">
        <Header />
        <OnboardingWelcome
          title={"Complete account setup"}
          text={"You're one-step away from selling your product to 1M+ people"}
          className={"welcome"}
        />
        <form
          className="grid gap-3 w-full"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="grid gap-2">
            <label className="label text flex gap-2">
              First Name <span className="text-[#CB0000]">*</span>
            </label>
            <input
              type="text"
              id="Firstname"
              placeholder="Sarah"
              {...register("Firstname", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "invalid first name",
                },
              })}
              className="input"
            />
          </div>
          <span className="text-red-500 text-[12px]">
            {errors?.Firstname && errors?.Firstname?.message}
          </span>
          <div className="grid gap-2">
            <label className="label text flex gap-2">
              Last Name <span className="text-[#CB0000]">*</span>
            </label>
            <input
              type="text"
              id="Lastname"
              placeholder="John"
              {...register("Lastname", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "invalid Last name",
                },
              })}
              className="input"
            />
          </div>

          <span className="text-red-500 text-[12px]">
            {errors?.Lastname && errors?.Lastname?.message}
          </span>
          <div className="grid gap-2 parentinput">
            <label className=" font-[500] w-full max-[390px]:text-[12px] text text-left justify-start flex gap-2">
              Phone Number <span className="text-[#CB0000]">*</span>
            </label>
            <span className="flex justify-between w-full max-[390px]:w-[358px] mx-auto">
              <select className="border  max-[390px]:w-[71px] w-[30%]">
                {Countries.map((country) => (
                  <option className="flex flex-rowb" key={country.id}>
                    {country.id} ({country.code})
                  </option>
                ))}
              </select>
              <input
                className="max-[390px]:w-[278px] w-[50%] border"
                type="text"
                id="phonenumber"
                placeholder="08012345678"
                {...register("phonenumber", {
                  required: "Required",
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Phone number should be atleast 10 characters",
                  },
                })}
              />
            </span>
          </div>
          <span className="text-red-500 text-[12px]">
            {errors?.phonenumber && errors?.phonenumber?.message}
          </span>

          <div className="grid gap-2">
            <label className="label text flex gap-2">
              Business Name <span className="text-[#CB0000]">*</span>
            </label>
            <input
              type="text"
              id="Businessname"
              placeholder="The SpiceKitchen"
              {...register("Businessname", {
                required: "Required",
              })}
              className="input"
            />
          </div>

          <span className="text-red-500 text-[12px]">
            {errors?.Businessname && errors?.Businessname?.message}
          </span>

          <div className="grid gap-2">
            <label className="label text flex">
              Store Address<span className="text-[#CB0000]">*</span>
            </label>
            <input
              type="text"
              id="Storeaddress"
              placeholder="Herbert Macaulay, Florida"
              {...register("Storeaddress", {
                required: "Required",
                pattern: {
                  value: /[A-Za-z0-9'\.\-\s\,]/,
                  message: "invalid address",
                },
              })}
              className="input"
            />
          </div>

          <span className="text-red-500 text-[12px]">
            {errors?.Storeaddress && errors?.Storeaddress?.message}
          </span>

          <div className="flex justify-between label parentinput gap-2">
            <label className="justify-start text-left max-[390px]:w-[170px] w-full grid">
              Country
              <select
                className="max-[390px]:w-[170px] w-4/5 border"
                defaultValue="Country"
                onChange={handleCountryChange}
              >
                <option value="Country" disabled>
                  Country
                </option>
                {countries?.map((country) => (
                  <option key={country.id} value={country.iso2}>
                    {country.iso2}, {country.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="justify-end text-left grid max-[390px]:w-[170px] w-full">
              City/Province
              <select
                className="max-[390px]:w-[170px] w-full border"
                defaultValue="City"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="City" disabled>
                  City
                </option>
                {cities?.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <OnboardingButton text={"Submit"} disabled={isChecked}/>
          <Terms isChecked={isChecked} setIsChecked={setIsChecked}/>
        </form>
        
      </div>
      {isLoading && <Loader />}
    </div>
  );
}

function Terms({isChecked, setIsChecked}) {

  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" value={isChecked} onChange={() => setIsChecked(prev => !prev)}/>
      <p>
        Creating an account means you're okay with our{" "}
        <strong>Terms of Service, Privacy Policy</strong>, and our default{" "}
        <strong>Notification settings</strong>
      </p>
    </div>
  );
}
