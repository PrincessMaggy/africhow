import React, { useState } from 'react'
import Nav from '../components/nav'
import Hero from '../components/Hero'
import SectionOne from '../components/homeSectionOne'

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
        <Nav toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <div>
            <Hero />
            <SectionOne />
            <sectionTwo />
            <sectionThree />
        </div>
        
    </div>
  )
}

export default Home