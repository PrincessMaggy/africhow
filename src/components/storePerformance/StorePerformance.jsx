import { useEffect, useState } from "react";
import dollar from "./assets/dollar.png";
import cart from "./assets/cart.png";
import favorite from "./assets/favorite.png";
import visibility from "./assets/visibility.png";
import spaghetticarbonara from "./assets/spaghetticarbonara.jpg";
import beeftacos from "./assets/beeftacos.jpg";
import sashimi from "./assets/sashimi.jpg";
import pepperoni from "./assets/pepperoni.jpg";
import cheeseburger from "./assets/cheeseburger.jpg";
import dragonroll from "./assets/dragonroll.jpg";
import chickenburger from "./assets/chickenburger.jpg";
import margheritapizza from "./assets/margheritapizza.jpg";
import fishtacos from "./assets/fishtacos.jpg";
import linguine from "./assets/linguine.jpg";

function StorePerformance() {
  const [totalIncome, setTotalIncome] = useState(0);
  const orderedFoods = [
    {
      id: 1,
      customerName: "John Smith",
      restaurant: "Pizza Palace",
      image: pepperoni,
      orderedItems: [
        {
          item: "Pepperoni Pizza",
          quantity: 2,
          price: 55
        }
      ],
      orderDate: "2023-10-16T09:30:00",
      status: "Completed"
    },
    {
      id: 2,
      customerName: "Alice Johnson",
      restaurant: "Burger Barn",
      image: cheeseburger,
      orderedItems: [
        {
          item: "Cheeseburger",
          quantity: 1,
          price: 40
        }
      ],
      orderDate: "2023-10-16T12:15:00",
      status: "pending"
    },
    {
      id: 3,
      customerName: "Emily Davis",
      restaurant: "Sushi Express",
      image: sashimi,
      orderedItems: [
        {
          item: "Sashimi Combo",
          quantity: 1,
          price: 60
        }
      ],
      orderDate: "2023-10-16T19:45:00",
      status: "Completed"
    },
    {
      id: 4,
      customerName: "Michael Brown",
      restaurant: "Taco Time",
      image: beeftacos,
      orderedItems: [
        {
          item: "Beef Tacos",
          quantity: 3,
          price: 25
        }
      ],
      orderDate: "2023-10-17T10:30:00",
      status: "Cancelled"
    },
    {
      id: 5,
      customerName: "Olivia Wilson",
      restaurant: "Pasta House",
      image: spaghetticarbonara,
      orderedItems: [
        {
          item: "Spaghetti Carbonara",
          quantity: 1,
          price: 25
        }
      ],
      orderDate: "2023-10-17T14:20:00",
      status: "pending"
    },
    {
      id: 6,
      customerName: "William Lee",
      restaurant: "Sushi Express",
      image: dragonroll,
      orderedItems: [
        {
          item: "Dragon Roll",
          quantity: 2,
          price: 20
        }
      ],
      orderDate: "2023-10-18T17:45:00",
      status: "Completed"
    },
    {
      id: 7,
      customerName: "Sophia Davis",
      restaurant: "Burger Barn",
      image: chickenburger,
      orderedItems: [
        {
          item: "Chicken Burger",
          quantity: 1,
          price: 25
        }
      ],
      orderDate: "2023-10-18T12:45:00",
      status: "Completed"
    },
    {
      id: 8,
      customerName: "Liam Miller",
      restaurant: "Pizza Palace",
      image: margheritapizza,
      orderedItems: [
        {
          item: "Margherita Pizza",
          quantity: 2,
          price: 35
        }
      ],
      orderDate: "2023-10-19T19:10:00",
      status: "delivered"
    },
    {
      id: 9,
      customerName: "Isabella Harris",
      restaurant: "Taco Time",
      image: fishtacos,
      orderedItems: [
        {
          item: "Fish Tacos",
          quantity: 1,
          price: 20
        }
      ],
      orderDate: "2023-10-19T11:55:00",
      status: "pending"
    },
    {
      id: 10,
      customerName: "James Clark",
      restaurant: "Pasta House",
      image: linguine,
      orderedItems: [
        {
          item: "Linguine Alfredo",
          quantity: 1,
          price: 35
        }
      ],
      orderDate: "2023-10-20T13:30:00",
      status: "cancelled"
    }
  ];

  const findMostOrderedMeal = (orderedFoods) => {
    let mealCount = {}; // Object to store the total quantity of each meal

    // Iterate through the orderedFoods array
    orderedFoods.forEach((order) => {
      // Iterate through the orderedItems array
      order.orderedItems.forEach((item) => {
        // If the meal already exists in the mealCount object, increment its count
        // If not, add it to the mealCount object with its count
        mealCount[item.item] = (mealCount[item.item] || 0) + item.quantity;
      });
    });

    // Find the meal with the highest quantity
    let mostOrderedMeal = Object.keys(mealCount).reduce((a, b) =>
      mealCount[a] > mealCount[b] ? a : b
    );

    // Find the order with the most ordered meal
    let orderWithMostOrderedMeal = orderedFoods.find(
      (order) => order.orderedItems[0].item === mostOrderedMeal
    );

    return orderWithMostOrderedMeal;
  };

  let mostOrderedMeal = findMostOrderedMeal(orderedFoods);

  const ids = [1, 2, 3, 4, 5];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    const income = orderedFoods
      .filter((food) => ids.includes(food.id))
      .reduce((total, food) => {
        return (
          total +
          food.orderedItems.reduce(
            (itemTotal, item) => itemTotal + item.price * item.quantity,
            0
          )
        );
      }, 0);

    setTotalIncome(income);
  }, [orderedFoods]);

  const selectedOrders = orderedFoods
    .filter((food) => ids.includes(food.id))
    .map((food) => {
      return {
        id: food.id,
        meal: food.orderedItems.map((item) => item.item),
        quantity: food.orderedItems.map((item) => item.quantity),
        status: food.status || "Not Available",
        phoneNumber: "Not Available"
      };
    });

  const randomMeals = orderedFoods.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section>
      <h2 className="overview text-start mt-10 text-2xl font-semibold">
        Overview
      </h2>
      <section className="grid grid-cols-2 gap-6">
        <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
          <img
            src={dollar}
            alt="dollar-image"
            className="dollar w-10 h-10 mb-2"
          />
          <p className="p text-start text-2xl mb-8">Total income</p>
          <h3 className="h3 text-start text-4xl font-semibold">
            ${totalIncome}
          </h3>
        </div>

        <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
          <img src={cart} alt="cart-image" className="cart w-10 h-10 mb-2" />
          <p className="p text-start text-2xl mb-8">Total order</p>
          <h3 className="h3 text-start text-4xl font-semibold">5</h3>
        </div>

        <div className="overview-grid-item border pt-10 pb-10 p-5 bg-light-green">
          <img
            src={favorite}
            alt="favorite-image"
            className="favorite w-10 h-10 mb-2"
          />
          <p className="p text-start text-2xl mb-8">Impressions</p>
          <h3 className="h3 text-start text-4xl font-semibold">12</h3>
        </div>

        <div className="overview-grid-item border pt-10 pb-10 p-5 bg-light-green">
          <img
            src={visibility}
            alt="visibility-image"
            className="visibility w-10 h-10 mb-2"
          />
          <p className="p text-start text-2xl mb-8">Most ordered meal</p>
          <h3 className="h3 text-start text-4xl font-semibold">
            {mostOrderedMeal.orderedItems[0].item}
          </h3>
        </div>
      </section>

      <h2 className="recent-orders text-start mt-10 text-2xl font-semibold">
        Recent orders
      </h2>
      <section className="orders-section">
        {selectedOrders.map((order, i) => (
          <div
            className="border border-gray-300 p-5 bg-light-red mt-10 rounded"
            key={i}
          >
            <span className="flex flex-row justify-between mb-5 text-2xl">
              <span className="text-gray-500">Order ID</span>
              <span className="">{order.id}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 text-2xl ">
              <span className="text-gray-500">Meal</span>
              <span>{order.meal}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 text-2xl">
              <span className="text-gray-500">Quantity</span>{" "}
              <span>{order.quantity}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 text-2xl">
              <span className="text-gray-500 ">Status</span>{" "}
              <span
                className={
                  order.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {order.status}
              </span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 text-2xl">
              <span className="text-gray-500">Phone Number</span>{" "}
              <span>{order.phoneNumber}</span>
            </span>
          </div>
        ))}
      </section>

      <h2 className="top-meals text-start mt-10 mb-6 text-2xl font-semibold">
        Top meals in your store
      </h2>
      <section className="top-meals-section grid grid-cols-3 gap-10">
        {randomMeals.map((meal, i) => (
          <motion.div
          animate={{ scale: [1, 2, 2, 1, 1], opacity: [1, 0.5, 0.5, 0.5, 1] }}
          transition={{ duration: getRandomInt(5) }}
          key={i}
          className="border border-gray-300 p-5 rounded"
        >
          <img className="h-60 w-100" src={meal.image} alt={meal.orderedItems[0].item} />
          <div className="flex flex-row justify-between mt-5">
              <h2 className="text-2xl">{meal.orderedItems[0].item}</h2>
              <p className="text-2xl font-bold">
              ${meal.orderedItems[0].price}
              </p>
          </div>
        </motion.div>
        ))}
      </section>
    </section>
  );
}

export default StorePerformance;
