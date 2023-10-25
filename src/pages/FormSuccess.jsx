import React from "react";
// import OnboardingWelcome from "../components/OnboardingWelcome";
// import OnboardingButton from "../components/OnboardingButton";
// import Loader from "../components/LoaderOnboarding";
// import OnboardingButton from "../components/OnboardingButton";
// import Loader from "../components/LoaderOnboarding";
import ReactPlayer from "react-player";
import Gif from "../assets/AnimateOnboarding/animation_lo0ckjix.mp4";
import Success from "../components/Success";

export default function FormSuccess({ text, buttonText, title, onNavigate }) {
  return (
    <div className="grid gap-6 w-[358px] mx-auto place-items-center">
      <div className="w-[358px]">
        <ReactPlayer url={Gif} playing muted width="358px" />
      </div>

      <Success text={text} buttonText={buttonText} title={title} onNav={onNavigate}/>
    </div>
  );
}
