// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import PropTypes from 'prop-types';
import navList from '../../lib/NewNavList';
import './newnav.css'
import hamburger from '../../assets/NavIcons/hamburger.svg'
import menuClose from '../../assets/NavIcons/closeIcon.svg'
import ChevronRight from '../../assets/NavIcons/ChevronRight';
import { useLocation } from 'react-router-dom';
import React from 'react';

const NewNavbar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="navbar relative ">
      <div className="harmburge mx-4 py-6 flex">
        <img
          src={hamburger}
          alt='menu open'
          onClick={() => setOpenNav(true)}
        />
        <span className='pl-2 text-lg font-medium'>Menu</span>
      </div>
      {openNav && (
        <div className="navlists w-full absolute top-0 bottom-0 h-screen bg-white z-10">
          <div className="harmburge mx-4 py-6 flex">
            <img
              src={menuClose}
              alt=''
              srcSet=''
              onClick={() => setOpenNav(false)}
            />
            <span className='pl-2 text-lg font-medium'>Menu</span>
          </div>
          {navList.map((item, index) => (
            <Link to={item.route} key={index}>
             <div className="navitem mx-4 py-3" >
            <div className="flex justify-between">
              <div className="icon flex">
              {item.icon}
                <span 
                  className={`text-large font-medium pl-1 ${currentPathname === item.route ? 'activeLink' : ''}`}

                >{item.title}</span>
              </div>
              <div className="arrow">
                <ChevronRight isActive={currentPathname === item.route}/>
              </div>
            </div>
          </div>
            </Link>
           
          ))}
          
        </div>
      )}


     
    </div>
  );
};

NewNavbar.propTypes = {
  navTitle: PropTypes.string,
};

export default NewNavbar;
