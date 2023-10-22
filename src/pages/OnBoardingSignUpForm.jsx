import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Countries } from "../phone/countrycode";
import PasswordEye from "../assets/Vector.png";
import OnboardingButton from "../components/OnboardingButton";
import axios from "axios";
import Header from "../components/Header";
import OnboardingWelcome from "../components/OnboardingWelcome";
import "../onboardingloginsignup.css";

export default function OnBoardingSignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [countries, SetCountries] = useState([])
    const [query, setQuery] = useState('');
    const { register, handleSubmit, formState } = useForm();
    const { errors, isValid, isDirty } = formState;
    const navigate = useNavigate();

    useEffect(()=>{
      const config = {
        method: 'get',
        url: `https://api.countrystatecity.in/v1/countries/${query}/cities`,
        headers: {
          'X-CSCAPI-KEY': 'API_KEY'
        }
      };

      axios(config)
      .then((res) => {
        console.log(JSON.stringify(response.data));
        SetCountries(JSON.stringify(res.data))
        
      })
      .catch((error) => {
        console.log(error);
      });
    },[])
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    function onSubmit(data) {
      console.log(data);
      navigate("/");
    }
  
    function onError(errors) {
      console.log(errors);
    }
  return (
    <div className="w-[358px] mx-auto flex flex-col gap-3">
      <Header />
      <OnboardingWelcome 
        title={'Complete account setup'} 
        text={"You're one-step away from selling your product to 1M+ people"}
      />
      <form className="grid gap-3 w-[358px]" onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="grid gap-2">
            <label className="label text flex gap-2">
              First Name <span className="text-[#CB0000]">*</span></label>
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
              Last Name <span className="text-[#CB0000]">*</span></label>
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
            
            
            <label className="label text grid gap-2">
              Phone Number <span className="text-[#CB0000]">*</span>
              <span className="flex justify-between">
                  <select className="input border-r border-solid border-[##E5E5E5] w-[71px]">
                    {Countries.map((country) => (
                      <option className="flex flex-rowb" key={country.id}>
                        {country.id} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    className="w-[278px] input"
                    type="text"
                    id="phonenumber"
                    placeholder="123-456-7891"
                    {...register("phonenumber", {
                      required: "Required",
                      pattern: {
                        value: /^[0-9]{10,13}$/,
                        message: "invalid phone number",
                      },
                    })}
                  />
                
              </span>
            </label>
            <div className="grid gap-2">
            <label className="label text flex gap-2">
              Business Name <span className="text-[#CB0000]">*</span></label>
              <input
                type="text"
                id="Businessname"
                placeholder="The SpiceKitchen"
                {...register("Businessname", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "invalid Business name",
                  },
                })}
                className="input"
              />
            </div>
            
            <span className="text-red-500 text-[12px]">
              {errors?.Businessname && errors?.Businessname?.message}
            </span>

            <div className="grid gap-2">
            <label className="label text flex">
              Store Address<span className="text-[#CB0000]">*</span></label>
              <input
                type="text"
                id="Storeaddress"
                placeholder="Herbert Macaulay, Florida"
                {...register("Storeaddress", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "invalid address",
                  },
                })}
                className="input"
              />
            </div>
            

            <span className="text-red-500 text-[12px]">
              {errors?.Storeaddress && errors?.Storeaddress?.message}
            </span>
            <div className="flex gap-2">
              <label className="w-[170px]">
                Country
                <select className="w-[170px] input">
                  {Countries?.map(country => <option key={country.id}>{country.name}</option>)}
                </select>
              </label>
              <label className="w-[170px]">
                City/Province
                <select className="w-[170px] input">
                  {Countries?.map(country => <option key={country.id}>{country.name}</option>)}
                </select>
              </label>
            </div>
            <OnboardingButton text={"Submit"}/> 
      </form>
      <Terms />
    </div>
  )
}

function Terms(){
  return(
    <div className="flex items-start">
      <input type="checkbox"/>
      <p>Creating an account means you're okay with our <strong>Terms of Service, Privacy Policy</strong>, and our default <strong>Notification settings</strong></p>
    </div>
  )
}