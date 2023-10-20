import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SectionOne from '../components/homeSectionOne'
import SectionTwo from '../components/homeSectionTwo'
import SectionThree from '../components/homeSectionThree'

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
            <SectionTwo />
            <SectionThree />
        </div>
        
    </div>
  )
}

export default Home