import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dollar from "../../assets/icons/dollar.png";
import cart from "../../assets/icons/cart.png";
import favorite from "../../assets/icons/favorite.png";
import visibility from "../../assets/icons/visibility.png";
import orders from "../../lib/orders.js";

// Define a React functional component named StorePerformance
function StorePerformance() {
  // Initialize a state variable for total income using the useState hook
  const [totalIncome, setTotalIncome] = useState(0);

  // Define a function to find the most ordered meal from the orderedFoods array
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

  // Call the findMostOrderedMeal function to get the most ordered meal
  let mostOrderedMeal = findMostOrderedMeal(orders);

  // Define an array of selected order IDs
  const ids = [1, 2, 3, 4, 5];

  // Define a function to generate a random integer
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  // Use the useEffect hook to update totalIncome when orderedFoods change
  useEffect(() => {
    const income = orders
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
  }, [orders]);

  // Filter and map selected orders to a new array
  const selectedOrders = orders
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

  // Create an array of three random meals from orderedFoods
  const randomMeals = orders.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Render the components and data on the page
  return (
    <section className="font-Manrope mx-10">
      {/* Overview section */}
      <h2 className="lg:text-start text-start mt-10 lg:text-2xl text-lg  font-semibold">
        Overview
      </h2>
      <section className="grid lg:grid-cols-2 grid-cols-2 lg:gap-6 gap-2">
        {/* ... (Render components and data for the overview section) */}
        <div className="border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img
            src={dollar}
            alt="dollar-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-2xl text-lg mb-8">Total income</p>
          <h3 className="text-start lg:text-4xl text-xl font-semibold">
            ${totalIncome}
          </h3>
        </div>

        <div className="border pt-10 lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img
            src={cart}
            alt="cart-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-2xl text-lg mb-8">Total order</p>
          <h3 className="text-start lg:text-4xl text-xl font-semibold">5</h3>
        </div>

        <div className="border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={favorite}
            alt="favorite-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-2xl text-lg mb-8">Impressions</p>
          <h3 className="text-start lg:text-4xl text-xl font-semibold">12</h3>
        </div>

        <div className="border lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={visibility}
            alt="visibility-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-2xl text-lg mb-8">
            Most ordered meal
          </p>
          <h3 className="text-start lg:text-4xl text-xl font-semibold">
            #001 - {mostOrderedMeal.orderedItems[0].item}
          </h3>
        </div>
      </section>

      {/* Recent orders section */}
      <h2 className="text-start lg:mt-10 mt-10 lg:text-2xl text-lg font-semibold">
        Recent orders
      </h2>
      <section>
        {/* Map and render selectedOrders data */}
        {selectedOrders.map((order, i) => (
          <div
            className="border border-gray-300 p-5 bg-light-red mt-10 rounded"
            key={i}
          >
            <span className="flex flex-row justify-between mb-5 lg:text-2xl text-lg">
              <span className="text-gray-500">Order ID</span>
              <span>{order.id}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 lg:text-2xl text-lg ">
              <span className="text-gray-500">Meal</span>
              <span>{order.meal}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 lg:text-2xl text-lg">
              <span className="text-gray-500">Quantity</span>
              <span>{order.quantity}</span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 mb-5 lg:text-2xl text-lg">
              <span className="text-gray-500 ">Status</span>
              <span
                className={
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }
              >
                {order.status}
              </span>
            </span>
            <hr />
            <span className="flex flex-row justify-between mt-5 lg:text-2xl text-lg">
              <span className="text-gray-500">Phone Number</span>{" "}
              <span>{order.phoneNumber}</span>
            </span>
          </div>
        ))}
      </section>

      {/* Top meals section */}
      <h2 className="text-start lg:mt-10 mt-10 mb-6 lg:text-2xl text-lg font-semibold">
        Top meals in your store
      </h2>
      <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mb-10 mt-10">
        {/* Map and render randomMeals data */}
        {randomMeals.map((meal, i) => (
          <motion.div
            animate={{ scale: [1, 2, 2, 1, 1], opacity: [1, 0.5, 0.5, 0.5, 1] }}
            transition={{ duration: getRandomInt(5) }}
            key={i}
            className="border border-gray-300 p-5 rounded"
          >
            {/* ... (Render meal details) */}
            <img
              className="h-60 w-100"
              src={meal.image}
              alt={meal.orderedItems[0].item}
            />
            <div className="flex flex-row justify-between mt-5">
              <h2 className="lg:text-2xl text-lg">
                {meal.orderedItems[0].item}
              </h2>
              <p className="lg:text-2xl text-lg font-bold">
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
