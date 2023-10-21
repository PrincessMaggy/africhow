import React from 'react'
import HamBurger from "../assets/hamburger/white.svg";
import Close from "../assets/hamburger/Close.svg";
import HeaderTitle from "../mapping/navHeaderTitle";
import { Link } from 'react-router-dom';

const Nav = ({ toggleMenu, menuOpen, toggleDropdown }) => {
  const closeMenu = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className='px-10 py-10 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
      <div className='flex gap-3 justify-center items-center'>
        <img src= {HamBurger} alt="" srcset="" className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black' onClick={toggleMenu} />
        <HeaderTitle />
      </div>
      <div className='flex md:justify-center'>
        <button className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-white py-1 px-5 font-black pointer'>
          Login
        </button>
      </div>

    {/* Close button */}
    {menuOpen && (
        <div className='absolute top-8 mt-4 left-12 cursor-pointer flex items-center justify-center'>
          <div className='flex justify-between items-center gap-3'>
            <img src={Close} alt='' srcSet='' className='z-30 relative stroke-current bg-black p-2 border-2 w-7'onClick={toggleMenu} />
            <h1 className='z-30 text-black font-bold '>AfriChow</h1>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="fixed top-0 left-0 right-24 bottom-0 pt-32 bg-green-100 text-black flex flex-col items-center ease-out delay-500s duration-300">
          <ul className="text-xl lg:text-6xl md:text-4xl font-semibold mb-5 lg:text-center md:text-center text-left">
            <li className="cursor-pointer mb-2">
              <Link to="/community" onClick={closeMenu}>Join the Trybe </Link>
            </li>
            <li className="cursor-pointer mb-2" >
              <Link to="/rewards" onClick={closeMenu}>Loyalty Rewards</Link>
            </li>
            <li className="cursor-pointer mb-2" >
              <Link to="/onboarding-documentation" onClick={closeMenu}>KYC Onboarding</Link>
            </li>
            <li className="cursor-pointer mb-2" >
              <Link to="/contact-us" onClick={closeMenu}>Loyalty Support</Link>
            </li>
          </ul>
          <div className="mt-auto p-4 flex items-center gap-4">
            <p id="subscribe" className="text-xs font-semibold">
              Join Our Mailing List
            </p>
            <form>
              <button className="bg-green-500 text-black font-bold py-2 px-4 text-sm" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav
