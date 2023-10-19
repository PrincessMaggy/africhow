import { useEffect, useState } from "react";
import dollar from "./assets/dollar.png";
import cart from "./assets/cart.png";
import favorite from "./assets/favorite.png";
import visibility from "./assets/visibility.png";
import image2 from "./assets/image2.png";
import image1 from "./assets/image1.png";
import image3 from "./assets/image3.png";

function StorePerformance2() {
  const [totalIncome, setTotalIncome] = useState(0);
  const orderedFoods = [
    {
      id: 1,
      customerName: "John Smith",
      restaurant: "Pizza Palace",
      orderedItems: [
        {
          item: "Pepperoni Pizza",
          quantity: 2,
          price: 5000
        }
      ],
      orderDate: "2023-10-16T09:30:00",
      status: "delivered"
    },
    {
      id: 2,
      customerName: "Alice Johnson",
      restaurant: "Burger Barn",
      orderedItems: [
        {
          item: "Cheeseburger",
          quantity: 1,
          price: 3000
        }
      ],
      orderDate: "2023-10-16T12:15:00",
      status: "pending"
    },
    {
      id: 3,
      customerName: "Emily Davis",
      restaurant: "Sushi Express",
      orderedItems: [
        {
          item: "Sashimi Combo",
          quantity: 1,
          price: 10000
        }
      ],
      orderDate: "2023-10-16T19:45:00",
      status: "delivered"
    },
    {
      id: 4,
      customerName: "Michael Brown",
      restaurant: "Taco Time",
      orderedItems: [
        {
          item: "Beef Tacos",
          quantity: 3,
          price: 5000
        }
      ],
      orderDate: "2023-10-17T10:30:00",
      status: "cancelled"
    },
    {
      id: 5,
      customerName: "Olivia Wilson",
      restaurant: "Pasta House",
      orderedItems: [
        {
          item: "Spaghetti Carbonara",
          quantity: 1,
          price: 6000
        }
      ],
      orderDate: "2023-10-17T14:20:00",
      status: "pending"
    },
    {
      id: 6,
      customerName: "William Lee",
      restaurant: "Sushi Express",
      orderedItems: [
        {
          item: "Dragon Roll",
          quantity: 2,
          price: 3000
        }
      ],
      orderDate: "2023-10-18T17:45:00",
      status: "delivered"
    },
    {
      id: 7,
      customerName: "Sophia Davis",
      restaurant: "Burger Barn",
      orderedItems: [
        {
          item: "Chicken Burger",
          quantity: 1,
          price: 2000
        }
      ],
      orderDate: "2023-10-18T12:45:00",
      status: "delivered"
    },
    {
      id: 8,
      customerName: "Liam Miller",
      restaurant: "Pizza Palace",
      orderedItems: [
        {
          item: "Margherita Pizza",
          quantity: 2,
          price: 10000
        }
      ],
      orderDate: "2023-10-19T19:10:00",
      status: "delivered"
    },
    {
      id: 9,
      customerName: "Isabella Harris",
      restaurant: "Taco Time",
      orderedItems: [
        {
          item: "Fish Tacos",
          quantity: 1,
          price: 10000
        }
      ],
      orderDate: "2023-10-19T11:55:00",
      status: "pending"
    },
    {
      id: 10,
      customerName: "James Clark",
      restaurant: "Pasta House",
      orderedItems: [
        {
          item: "Linguine Alfredo",
          quantity: 1,
          price: 20000
        }
      ],
      orderDate: "2023-10-20T13:30:00",
      status: "cancelled"
    }
  ];

  const ids = [1, 2, 3, 4, 5];

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
          <h3 className="h3 text-start text-4xl font-semibold">-</h3>
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
              <span>{order.status}</span>
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
      <section className="top-meals-section grid grid-cols-3 gap-20">
        <section>
          <img src={image2} alt="Jollof Rice" />
          <p className="text-start">Jollof Rice</p>
        </section>

        <section>
          <img src={image3} alt="Pepper Soup" />
          <p className="text-start">Pepper Soup</p>
        </section>

        <section>
          <img src={image1} alt="Nkwobi" />
          <p className="text-start">Nkwobi</p>
        </section>
      </section>
    </section>
  );
}

export default StorePerformance2;
