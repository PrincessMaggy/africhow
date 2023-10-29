import RewardIcon from '../assets/NavIcons/RewardIcon.jsx';
import Contract from '../assets/NavIcons/Contract.jsx';


const navList = [
  
  {
    title: "Loyalty Rewards",
    route: "/rewards",
    icon: <RewardIcon />,
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
    
    title: "Payout",
    route: "/vendors-dashboard",
  },

  {
    title: "Transaction",
    route: "/vendors-transaction",
  },

  {
    title: "Payout method",
    route: "/vendors-payout-method",
  },

  {
    title: "Order Management",
    route: "/incoming",
    icon: <Contract />,
  },
  // Add more navigation items as needed
];

export default navList;
