import { MdCurrencyExchange, MdRestaurantMenu, MdReceiptLong, MdDeliveryDining, MdPersonAddAlt, MdHome } from "react-icons/md";
import { IoAnalytics, IoTrophy } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";

const navList = [
    {
      id: 1,
      title: 'ChowTybe',
      icon:  <LiaUserFriendsSolid />,
      sub_title: 'Community', 
      route: '/trending',
      
    },
    {
      id: 2,
      title: 'Loyalty Rewards', 
      sub_title: 'Rewards', 
      route: '/rewards',
      
    },

    {
      id: 3,
      title: 'Support', 
      sub_title: 'Support', 
      route: '/',
      
    },
    {
      id: 4,
      title: 'Facebook', 
      sub_title: 'Meta', 
      route: '/',
      
    },
    {
      id: 5,
      title: 'Support', 
      sub_title: 'LinkedIn', 
      route: '/',
      
    },
    {
      id: 6,
      title: 'Support', 
      sub_title: 'X', 
      route: '/',
      
    },
    
    {
      id: 7,
      title: 'Dashboard', 
      icon: <IoAnalytics />, 
      route: '/',
      
    },
    {
      id: 8,
      title: 'Meals', 
      icon: <MdRestaurantMenu/>, 
      route: '/meallisting/:userId',
      
    },

    {
      id: 9,
      title: 'Orders Management', 
      icon: <MdReceiptLong />, 
      route: '/',
      
    },

    
    {
      id: 10,
      title: 'Transactions', 
      icon: <MdCurrencyExchange />, 
      route: '/',
      
    },

    {
      id: 11,
      title: 'Delivery', 
      icon: <MdDeliveryDining />, 
      route: '/',
      
    },
    {
      id: 12,
      title: 'Profile', 
      icon: <MdPersonAddAlt />, 
      route: '/',
      
    },

    {
      id: 13,
      title: 'Rewards', 
      icon: <IoTrophy />, 
      route: '/',
      
    },

    {
      id: 14,
      title: 'Home', 
      icon: <MdHome />, 
      route: '/',
      
    },
    
    ];
    
    export default navList;