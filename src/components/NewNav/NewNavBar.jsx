// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import PropTypes from 'prop-types';
import navList from '../../lib/NewNavList';
import './newnav.css'
import hamburger from '../../assets/NavIcons/hamburger.svg'
import menuClose from '../../assets/NavIcons/closeIcon.svg'
import RewardIcon from '../../assets/NavIcons/RewardIcon';
import ChevronRight from '../../assets/NavIcons/ChevronRight';

const NewNavbar = () => {

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
        <div className="navlists w-full absolute top-0 bottom-0">
          <div className="harmburge mx-4 py-6 flex">
            <img
              src={menuClose}
              alt=''
              srcSet=''
              // className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black'
              onClick={() => setOpenNav(false)}
            />
            <span className='pl-2 text-lg font-medium'>Menu</span>
          </div>
          {navList.map((item, index) => (
            <Link to={item.route} key={index}>
             <div className="navitem mx-4 py-3" >
            <div className="flex justify-between">
              <div className="icon flex">
                <span>{item.icon}</span>
                <span className='text-large font-medium pl-1'>{item.title}</span>
              </div>
              <div className="arrow">
                <ChevronRight />
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
