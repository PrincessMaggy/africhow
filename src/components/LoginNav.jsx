import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OpenMenu from "../assets/hamburger/dark.png";
import LoginList from "../lib/loginnavlist";

function LoginNav(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    
    <nav>
         <div className="flex gap-2 px-6 py-6 bg-white">
            <div onClick={() => toggle()} className="cursor-pointer">
                <div>
                    <img src={OpenMenu} alt="" />
                </div>
            </div>
            <div>{props.title}</div>
          </div>
        {isOpen?
      <div className="fixed top-0 left-0 z-10 w-full h-full bg-black/30">
        <div className="flex flex-col px-6 w-[70%] sm:w-[50%] bg-white h-full">
          <div className="flex gap-2 my-6">
            <div onClick={() => toggle()} className="cursor-pointer">
              
              <div className="bg-black p-0.5">
                <p className="w-5 text-4xl font-thin leading-5 text-white rotate-45">
                  +
                </p>
              </div>
            </div>
            <div>{props.title}</div>
          </div>
          {LoginList.map((item, index) => (
            <div key={index} item={item} className="mb-4 text-left">
              <div
                className={
                  location.pathname === item.path
                    ? "text-primary"
                    : " text-black"
                }
              >
                <Link to={item.path} className="flex items-center gap-3">
                  <img
                    src={
                      location.pathname === item.path ? item.Image2 : item.Image
                    }
                    alt=""
                  />
                  <p>{item.title}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div> : ("")}
    </nav>
  );
}

export default LoginNav;
