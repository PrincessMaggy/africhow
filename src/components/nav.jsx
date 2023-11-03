import { useState } from 'react';
import Nav from '../mapping/navBar';

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

{/*Nav.propTypes = {
    toggleMenu: PropTypes.func,
    menuOpen: PropTypes.bool,
    toggleDropdown: PropTypes.func,
};*/}

export default NavBar;
