import {useState} from 'react';
import Nav from '../hooks/navBar';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Nav
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleDropdown={toggleDropdown}
            />
        </div>
    );
};

export default NavBar;
