import contracticon from "../assets/icons/LoginNavIcons/contract.svg";
import dashboard from "../assets/icons/LoginNavIcons/timeline.png";
import foodmenu from "../assets/icons/LoginNavIcons/local_dining.svg";
import payout from "../assets/icons/LoginNavIcons/payout.svg";
import transhistory from "../assets/icons/LoginNavIcons/monetization_on.svg";
import delivery from "../assets/icons/LoginNavIcons/airport_shuttle.svg";
import profile from "../assets/icons/LoginNavIcons/person_add.svg";
import loyaltyrewards from "../assets/icons/LoginNavIcons/rewarded_ads.svg";

import contracticon2 from "../assets/icons/LoginNavIcons/orders.svg";
import dashboard2 from "../assets/icons/LoginNavIcons/dashboard.svg";
import foodmenu2 from "../assets/icons/LoginNavIcons/foodmenu.svg";
import payout2 from "../assets/icons/LoginNavIcons/payoutgreen.svg";
import transhistory2 from "../assets/icons/LoginNavIcons/transhistory.svg";
import delivery2 from "../assets/icons/LoginNavIcons/delivery.svg";
import profile2 from "../assets/icons/LoginNavIcons/profile.svg";
import loyaltyrewards2 from "../assets/icons/LoginNavIcons/loyalty.svg";



const LoginList = [
    {
        id: 1,
        title: 'Dashboard',
        Image: dashboard,
        Image2: dashboard2,
        path: '/',
    },

    {
        id: 2,
        title: 'Food menu',
        Image: foodmenu,
        Image2: foodmenu2,
        path: '/',
    },

    {
        id: 3,
        title: 'Order Management',
        Image: contracticon,
        Image2: contracticon2,
        path: '/incoming',
    },

    {
        id: 4,
        title: 'Payout',
        Image: payout,
        Image2: payout2,
        path: '/',
    },

    {
        id: 5,
        title: 'Trans. history',
        Image: transhistory,
        Image2: transhistory2,
        path: '/',
    },

    {
        id: 6,
        title: 'Delivery',
        Image: delivery,
        Image2: delivery2,
        path: '/',
    },

    {
        id: 7,
        title: 'Profile',
        Image: profile,
        Image2: profile2,
        path: '/',
    },

    {
        id: 8,
        title: 'Loyalty Rewards',
        Image: loyaltyrewards,
        Image2: loyaltyrewards2,
        path: '/',
    },
]

export default LoginList