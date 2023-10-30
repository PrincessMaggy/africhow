import HelpIcon from '../assets/NavIcons/HelpIcon.jsx';
import RewardIcon from '../assets/NavIcons/RewardIcon.jsx';


const navList = [
  
  {
    title: "Loyalty Rewards",
    route: "/rewards",
    icon: RewardIcon,
  },

  {
    title: "Store Performance",
    route: "/store-overview",
  },

  {
    title: "Help",
    route: "/vendorsupport",
    icon: HelpIcon,
  }
  // Add more navigation items as needed
];

export default navList;
