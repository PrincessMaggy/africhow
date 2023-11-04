import {
    MdCurrencyExchange,
    MdRestaurantMenu,
    MdReceiptLong,
    MdDeliveryDining,
    MdPersonAddAlt,
    MdHome,
    MdOutlineSupportAgent,
} from 'react-icons/md';
import {IoAnalytics, IoTrophy} from 'react-icons/io5';
import {LiaUserFriendsSolid} from 'react-icons/lia';

const navList = [
    {
        id: 1,
        title: 'ChowTrybe',
        icon: <LiaUserFriendsSolid />,
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
        icon: <MdOutlineSupportAgent />,
        sub_title: 'Support',
        route: '/vendorsupport',
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
        route: '/vendors-dashboard',
    },
    {
        id: 8,
        title: 'Meals',
        icon: <MdRestaurantMenu />,
        route: '/meallisting/:userId',
    },

    {
        id: 9,
        title: 'Orders Management',
        icon: <MdReceiptLong />,
        route: '/order-summary',
    },

    {
        id: 10,
        title: 'Transactions',
        icon: <MdCurrencyExchange />,
        route: '/vendors-transaction',
    },

    {
        id: 11,
        title: 'Notification',
        icon: <MdDeliveryDining />,
        route: '/notification',
    },
    {
        id: 12,
        title: 'Profile',
        icon: <MdPersonAddAlt />,
        route: '/profile/:userId',
    },

    {
        id: 13,
        title: 'Rewards',
        icon: <IoTrophy />,
        route: '/rewards',
    },

    {
        id: 14,
        title: 'Home',
        icon: <MdHome />,
        route: '/',
    },
];

export default navList;
