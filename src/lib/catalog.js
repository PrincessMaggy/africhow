import bronze from "../assets/images/bronze.svg";
import bronzimg from "../assets/images/bronzimg.png";
import silver from "../assets/images/silver1.png";
import silverbig from "../assets/images/silver.png";
import gold from "../assets/images/gold.png";
import goldimg from "../assets/images/goldimg.png";
import afriking from "../assets/images/afriking.png";
import chowking from "../assets/images/chowking.png";
import stars from "../assets/images/stars.png";


const catalogs = [
    {
        id: 1,
        rate: "50 five star",
        name: "Bronze",
        title: "Bronze Tier",
        image: bronze,
        img: bronzimg,
        header:"Get 50 (5) Stars to achieve this Tier",
        task: "Unlock Bronze Tier by getting 50 (5) star ratings",
        summary: "Unlock Bronze Tier with 20/50 five star ratings",
        description: "Receive BRONZE tier once you have successfully received 50 (5) stars ratings from your customers."
    },
 
    {
        id: 2,
        rate: "100 five star",
        name: "Sliver",
        title: "Silver Tier",
        image: silver,
        img: silverbig,
        header:"Get (100) 5 Stars to achieve this Tier",
        task: "Unlock Silver Tier by getting 100 (5) star ratings",
        summary: "Unlock Silver Tier with 20/100 five star ratings",
        description: "Receive SILVER tier once you have successfully received 100 five star ratings from your customers."
    },
    {
        id: 3,
        rate: "200 five star",
        name: "Gold",
        title: "Gold Tier",
        image: gold,
        img: goldimg,
        header:"Get (200) 5 Stars to achieve this Tier",
        task: "Unlock Silver Tier by getting 200 (5) star ratings",
        summary: "Unlock Gold Tier with 20/200 five star ratings",
        description: "Receive GOLD tier once you have successfully received 200 five star ratings from your customers."
    },
    {
        id: 3,
        rate: "500 five star",
        name: "AfriChow King",
        title: "AfriChow King",
        image: afriking,
        img: chowking,
        header:"Get (500) 5 Stars to achieve this Tier",
        task: "Unlock Silver Tier by getting 300 (5) star ratings",
        summary: "Unlock the AfriChow King crown with 20/500 five star ratings",
        description: "Receive this crown once you have successfully received 500 (5) star ratings from your customers."
    },
    
]

export default catalogs
