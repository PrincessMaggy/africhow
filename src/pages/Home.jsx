import {useState} from 'react';
import Nav from '../components/nav';
import Hero from '../components/Hero';
import HomeSectionOne from '../components/homeSectionOne';
import HomeSectionThree from '../components/homeSectionThree';

const Home = () => {
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
            <div>
                <Hero />
                <HomeSectionOne />
                {/* <sectionTwo /> */}
                <HomeSectionThree />
            </div>
        </div>
    );
};

export default Home;
