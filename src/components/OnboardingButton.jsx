import React from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingButton({ text, onClick, onNav, disabled}) {
  const navigate = useNavigate()
  function handleClick(){
    onClick
    navigate(onNav)
  }
  return (
    <button
      // disabled={!isDirty && !isValid}////
      className="
    bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[32px]"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
