import { useState } from 'react';


import Nav from "../nav"
import RewardNav from "./RewardNav"
import './rewards.css'

const EarnStars = () => {
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
      <RewardNav />
      <div className="earn_wrapper text-left px-10 py-8">
      <p className="text-lg font-semibold 	">A guide on how to earn more stars</p>
      <ul className="list-disc pl-6 text-base">
        <li>Star ratings earned can be used to earn Rewards and make upgrades</li>
        <li>Bonus points for achieving 100 orders</li>
        <li>Bonus points for achieving 100 orders Maintain a five star rating from customers in order to unlock amazing rewards.</li>
      </ul>
      </div>
      
    </div>
  )
}

export default EarnStars