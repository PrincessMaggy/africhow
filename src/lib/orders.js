import pepperoni from "../assets/meals/pepperoni.jpg";
import cheeseburger from "../assets/meals/cheeseburger.jpg";
import sashimi from "../assets/meals/sashimi.jpg";
import spaghetticarbonara from "../assets/meals/spaghetticarbonara.jpg";
import beeftacos from "../assets/meals/beeftacos.jpg";
import dragonroll from "../assets/meals/dragonroll.jpg";
import chickenburger from "../assets/meals/chickenburger.jpg";
import margheritapizza from "../assets/meals/margheritapizza.jpg";
import fishtacos from "../assets/meals/fishtacos.jpg";
import linguine from "../assets/meals/linguine.jpg";

const orders = [
    {
      id: 1,
      customerName: 'John Smith',
      restaurant: 'Pizza Palace',
      image: pepperoni,
      orderedItems: [
        {
          item: 'Pepperoni Pizza',
          quantity: 2,
          price: 55,
        },
      ],
      orderDate: '2023-10-16T09:30:00',
      status: 'Delivered',
    },
    {
      id: 2,
      customerName: 'Alice Johnson',
      restaurant: 'Burger Barn',
      image: cheeseburger,
      orderedItems: [
        {
          item: 'Cheeseburger',
          quantity: 1,
          price: 40,
        },
      ],
      orderDate: '2023-10-16T12:15:00',
      status: 'Pending',
    },
    {
      id: 3,
      customerName: 'Emily Davis',
      restaurant: 'Sushi Express',
      image: sashimi,
      orderedItems: [
        {
          item: 'Sashimi Combo',
          quantity: 1,
          price: 60,
        },
      ],
      orderDate: '2023-10-16T19:45:00',
      status: 'Delivered',
    },
    {
      id: 4,
      customerName: 'Michael Brown',
      restaurant: 'Taco Time',
      image: beeftacos,
      orderedItems: [
        {
          item: 'Beef Tacos',
          quantity: 3,
          price: 25,
        },
      ],
      orderDate: '2023-10-17T10:30:00',
      status: 'Cancelled',
    },
    {
      id: 5,
      customerName: 'Olivia Wilson',
      restaurant: 'Pasta House',
      image: spaghetticarbonara,
      orderedItems: [
        {
          item: 'Spaghetti Carbonara',
          quantity: 1,
          price: 25,
        },
      ],
      orderDate: '2023-10-17T14:20:00',
      status: 'Pending',
    },
    {
      id: 6,
      customerName: 'William Lee',
      restaurant: 'Sushi Express',
      image: dragonroll,
      orderedItems: [
        {
          item: 'Dragon Roll',
          quantity: 2,
          price: 20,
        },
      ],
      orderDate: '2023-10-18T17:45:00',
      status: 'Delivered',
    },
    {
      id: 7,
      customerName: 'Sophia Davis',
      restaurant: 'Burger Barn',
      image: chickenburger,
      orderedItems: [
        {
          item: 'Chicken Burger',
          quantity: 1,
          price: 25,
        },
      ],
      orderDate: '2023-10-18T12:45:00',
      status: 'Delivered',
    },
    {
      id: 8,
      customerName: 'Liam Miller',
      restaurant: 'Pizza Palace',
      image: margheritapizza,
      orderedItems: [
        {
          item: 'Margherita Pizza',
          quantity: 2,
          price: 35,
        },
      ],
      orderDate: '2023-10-19T19:10:00',
      status: 'Delivered',
    },
    {
      id: 9,
      customerName: 'Isabella Harris',
      restaurant: 'Taco Time',
      image: fishtacos,
      orderedItems: [
        {
          item: 'Fish Tacos',
          quantity: 1,
          price: 20,
        },
      ],
      orderDate: '2023-10-19T11:55:00',
      status: 'Pending',
    },
    {
      id: 10,
      customerName: 'James Clark',
      restaurant: 'Pasta House',
      image: linguine,
      orderedItems: [
        {
          item: 'Linguine Alfredo',
          quantity: 1,
          price: 35,
        },
      ],
      orderDate: '2023-10-20T13:30:00',
      status: 'Cancelled',
    },
    {
      id: 11,
      customerName: 'Ava Lewis',
      restaurant: 'Burger Barn',
      image: cheeseburger,
      orderedItems: [
        {
          item: 'Double Cheeseburger',
          quantity: 1,
          price: 65,
        },
      ],
      orderDate: '2023-10-20T16:05:00',
      status: 'Pending',
    },
    {
      id: 12,
      customerName: 'Noah White',
      restaurant: 'Sushi Express',
      image: sashimi,
      orderedItems: [
        {
          item: 'California Roll',
          quantity: 2,
          price: 30,
        },
      ],
      orderDate: '2023-10-21T20:15:00',
      status: 'Pending',
    },
    {
      id: 13,
      customerName: 'Mia Martinez',
      restaurant: 'Pizza Palace',
      image: margheritapizza,
      orderedItems: [
        {
          item: 'Vegetarian Pizza',
          quantity: 1,
          price: 30,
        },
      ],
      orderDate: '2023-10-21T14:45:00',
      status: 'Cancelled',
    },
    {
      id: 14,
      customerName: 'Elijah Young',
      restaurant: 'Taco Time',
      image: beeftacos,
      orderedItems: [
        {
          item: 'Chicken Tacos',
          quantity: 3,
          price: 30,
        },
      ],
      orderDate: '2023-10-22T11:20:00',
      status: 'Delivered',
    },
    {
      id: 15,
      customerName: 'Charlotte Turner',
      restaurant: 'Pasta House',
      image: spaghetticarbonara,
      orderedItems: [
        {
          item: 'Penne Vodka',
          quantity: 1,
          price: 25,
        },
      ],
      orderDate: '2023-10-22T16:55:00',
      status: 'Pending',
    },
    {
      id: 16,
      customerName: 'William Adams',
      restaurant: 'Burger Barn',        
      image: cheeseburger,
      orderedItems: [
        {
          item: 'Veggie Burger',
          quantity: 1,
          price: 20,
        },
      ],
      orderDate: '2023-10-23T12:30:00',
      status: 'Cancelled',
    },
    {
      id: 17,
      customerName: 'Amelia Harris',
      restaurant: 'Pizza Palace',
      image: margheritapizza,
      orderedItems: [
        {
          item: 'Hawaiian Pizza',
          quantity: 2,
          price: 45,
        },
      ],
      orderDate: '2023-10-23T19:50:00',
      status: 'Delivered',
    },
    {
      id: 18,
      customerName: 'Liam Baker',
      restaurant: 'Sushi Express',
      image: sashimi,
      orderedItems: [
        {
          item: 'Rainbow Roll',
          quantity: 1,
          price: 20,
        },
      ],
      orderDate: '2023-10-24T20:10:00',
      status: 'Pending',
    },
    {
      id: 19,
      customerName: 'Harper Wilson',
      restaurant: 'Taco Time',
      image: beeftacos,
      orderedItems: [
        {
          item: 'Beef Tacos',
          quantity: 2,
          price: 30,
        },
      ],
      orderDate: '2023-10-24T11:40:00',
      status: 'Delivered',
    },
  ];
  
  export default orders;