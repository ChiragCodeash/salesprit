import React, { useState } from "react";
import Card from "./Card";

const Dishes = () => {
  const BestDishes = [
    {
      img: "/assets/images/products/Porduct-1.png",
      price: "30,000",
      orders: "200",
      title: "Japanese  Food",
    },
    {
      img: "/assets/images/products/Porduct-2.png",
      price: "30,000",
      orders: "200",
      title: "Japanese  Food",
    },
    {
      img: "/assets/images/products/Porduct-3.png",
      price: "30,000",
      orders: "200",
      title: "Japanese  Food",
    },
    {
      img: "/assets/images/products/Porduct-1.png",
      price: "30,000",
      orders: "200",
      title: "Japanese  Food",
    },
  ];

  const dropDownItem = [
    {
      key: "today",
      name: "Today",
    },
    {
      key: "week",
      name: "This week",
    },
    {
      key: "month",
      name: "This month",
    },
  ];
  const DefaultDishesData = {
    today: [
      {
        img: "/assets/images/products/Porduct-3.png",
        title: "stews",
        price: 99,
        orders: 10,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "stews",
        price: 39,
        orders: 25,
      },
      {
        img: "/assets/images/products/Porduct-2.png",
        title: "pasta",
        price: 39,
        orders: 94,
      },
      {
        img: "/assets/images/products/Porduct-3.png",
        title: "sandwiches",
        price: 59,
        orders: 50,
      },
    ],
    week: [
      {
        img: "/assets/images/products/Porduct-2.png",
        title: "sandwiches",
        price: 89,
        orders: 323,
      },
      {
        img: "/assets/images/products/Porduct-2.png",
        title: "salads",
        price: 49,
        orders: 185,
      },
      {
        img: "/assets/images/products/Porduct-2.png",
        title: "seafood",
        price: 59,
        orders: 100,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "seafood",
        price: 59,
        orders: 209,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "pies",
        price: 39,
        orders: 391,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "salads",
        price: 59,
        orders: 106,
      },
    ],
    month: [
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "noodles",
        price: 19,
        orders: 749,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "pies",
        price: 49,
        orders: 829,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "sandwiches",
        price: 89,
        orders: 743,
      },
      {
        img: "/assets/images/products/Porduct-2.png",
        title: "seafood",
        price: 59,
        orders: 644,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "pies",
        price: 49,
        orders: 915,
      },
      {
        img: "/assets/images/products/Porduct-3.png",
        title: "cereals",
        price: 29,
        orders: 971,
      },
      {
        img: "/assets/images/products/Porduct-1.png",
        title: "noodles",
        price: 9,
        orders: 520,
      },
      {
        img: "/assets/images/products/Porduct-3.png",
        title: "soups",
        price: 79,
        orders: 762,
      },
    ],
  };
  const [activeTime, setActiveTime] = useState("today");
  const [bestDishes, setBestDishes] = useState(DefaultDishesData[activeTime]);

  const onChangeTime = (time) => {
    setActiveTime(time);
    setBestDishes(DefaultDishesData[time]);
  };
  return (
    <>
      <Card
        activeTime={activeTime}
        title={"Best Dishes"}
        dropDownItem={dropDownItem}
        onChangeTime={onChangeTime}
      >
        <div className="w-100">
          <table className="w-full text-md text-left rtl:text-right mt-3 text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                <th>Dishes</th>
                <th className="text-end">Orders</th>
              </tr>
            </thead>
            <tbody>
              {bestDishes.map(({ img, price, orders, title }, i) => {
                return (
                  <tr key={i}>
                    <td className="font-semibold text-md text-black">
                      <div className=" flex items-center py-2 rounded-lg">
                        <div className="flex-shrink-0   ">
                          <img
                            className=" rounded-lg w-11"
                            src={img}
                            alt="Neil"
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-md font-bold text-gray-900  truncate dark:text-white capitalize">
                            {title}
                          </p>
                          <p className="text-sm  font-semibold truncate text-primary">
                            ${price}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className=" text-end font-semibold text-md text-black px-6 py-2 ">
                      {orders}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default Dishes;
