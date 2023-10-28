import RewardIcon from '../assets/NavIcons/RewardIcon.jsx';
import ContractIcon from '../assets/NavIcons/Contract.jsx';


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
  },

  {
    title: "Help",
    route: "/supportform",
  },

  {
    title: "Help",
    route: "/supportsuccess",
  },

  {
    title: "Order Management",
    route: "/incoming",
    icon: ContractIcon,
  }
  // Add more navigation items as needed
];

export default navList;
