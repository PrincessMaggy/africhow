
import { useState } from 'react';
import Nav from '../mapping/navBar';

const homeNav = () => {
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

export default homeNav;
