import HamBurger from '../assets/hamburger/white.svg';
import HeaderTitle from '../mapping/navHeaderTitle';
// import Close from '../assets/close.svg';
import PropTypes from 'prop-types';

const Nav = ({toggleMenu, menuOpen, toggleDropdown}) => {
    return (
        <div className='px-10 py-10 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
            <div className='flex gap-3 justify-center items-center'>
                <img
                    src={HamBurger}
                    alt='Hamburger Icon'
                    className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black'
                    onClick={toggleMenu} // Add click handler to toggle the menu
                />
                <HeaderTitle />
            </div>
            <div className='flex md:justify-center'>
                <button className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-white py-1 px-5 font-black pointer'>
                    Login
                </button>
            </div>

            {/* Close button */}
            {menuOpen && (
                <div className='absolute top-8 mt-4 left-12 cursor-pointer flex items-center justify-between'>
                    <div>
                        <img
                            // src={Close}
                            alt='Close Icon'
                            className='z-30 relative stroke-current bg-black p-2 border-2 w-20'
                            onClick={toggleMenu}
                        />
                        <h3
                            className='z-30 text-black font-semibold'
                            onClick={toggleMenu}
                        >
                            Menu
                        </h3>
                    </div>
                    <div className='flex'>
                        <h1 className='z-30 text-black flex ml-44 font-bold fixed items-center py-2'>
                            AfriChow
                        </h1>
                    </div>
                </div>
            )}

            {/* Full-screen menu */}
            {menuOpen && (
                <div className='fixed top-0 left-0 right-0 bottom-0 pt-2 bg-green-50 text-black flex flex-col justify-center items-center gap-3 z-20 pl-1'>
                    <ul className='text-2xl font-semibold mb-'>
                        <li
                            className='my-5 cursor-pointer'
                            onClick={toggleDropdown}
                        >
                            Join the trybe
                        </li>
                    </ul>
                    <div className='py-1 px-7 flex items-center justify-center gap-12'>
                        <p
                            id='subscribe'
                            className='text-xs font-semibold pl-2'
                        >
                            Never miss a message
                        </p>
                        <button
                            className='bg-green-500 text-black font-bold py-2 px-4 text-xs'
                            type='submit'
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Nav.propTypes = {
    toggleMenu: PropTypes.func,
    menuOpen: PropTypes.bool,
    toggleDropdown: PropTypes.func,
};

export default Nav;
