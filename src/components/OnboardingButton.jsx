import React from "react";

export default function OnboardingButton({ text, onClick }) {
  return (
    <button
      // disabled={!isDirty && !isValid}////
      className="
    bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[32px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
