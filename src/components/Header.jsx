import HamBurger from '../assets/hamburger/dark.png';
import Close from '../assets/hamburger/Close.svg';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbarr flex items-center gap-3 mt-7'>
            <div className='grid'>
                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    {menuOpen ? (
                        <div
                            className='close-icon border border-solid border-[#33CC9F]'
                            onClick={toggleMenu}
                        >
                            <img src={Close} alt='Close' />
                        </div>
                    ) : (
                        <div className='hamburger' onClick={toggleMenu}>
                            <img src={HamBurger} alt='Menu' />
                        </div>
                    )}
                </div>
                <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
                    {menuOpen && (
                        <li className='bg-[#DCFCE7] px-3 py-4 rounded-lg'>
                            <Link to='/'>
                                <span className=''>Home</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <p className='text-[#000F08] text-[25px] font-bold'>Africhow</p>
        </div>
    );
}

export default Header;
