import React, { useState } from "react";
import Header from "../Common/Header";
import AllOrders from "./AllOrders";
import OrderDetails from "./OrderDetails";
import { IconCaretRightFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from "flowbite-react";

export const CustomeHeader = () => {
  return (
    <div className="flex justify-between w-1/3 items-center hidden lg:flex">
      <h3 className="font-bold text-primary text-xl">Order #20235</h3>
      <h3 className="font-bold text-success">Paid</h3>
    </div>
  );
};
const Common = ({ img, title_1, title_2, OnBack }) => {
  return (
    <div
      style={{ height: "100vh" }}
      className="flex justify-center items-center"
    >
      {/* <h1 style={{position : "absolute" , top : "130px" , left: "370px"}}>Back</h1> */}
      <div className="lg:w-1/2 xl:w-1/2">
        <img
          className="h-auto lg:max-w-lg mx-auto"
          src={img}
          alt="description"
        />
        <h1 className="font-semibold text-3xl mt-2 text-center">{title_1}</h1>
        <h1 className="font-semibold text-gray-500 text-xl mt-2 text-center">
          {title_2}
        </h1>

        <div className="flex justify-center mt-3">
          <button
            onClick={OnBack}
            type="button"
            className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            Back
            <IconCaretRightFilled />
          </button>
        </div>
      </div>
    </div>
  );
};

const Order = () => {
  const navigate = useNavigate();
  const [opration, setOpration] = useState("view");
  const [isOpen, setIsOpen] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 100,
      order_no: 10000,
      paid: false,
      table: 5,
      guest: 3,
      total: 449,
      cname: "Knox Avila",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "pasta",
          qty: 44,
          price: 400,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "desserts",
          qty: 38,
          price: 324,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "stews",
          qty: 10,
          price: 412,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "soups",
          qty: 10,
          price: 471,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "pasta",
          qty: 43,
          price: 236,
        },
      ],
    },
    {
      id: 101,
      order_no: 109999,
      paid: false,
      table: 4,
      guest: 3,
      total: 340,
      cname: "Vielka Davis",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "stews",
          qty: 37,
          price: 211,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "noodles",
          qty: 34,
          price: 438,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "noodles",
          qty: 32,
          price: 281,
        },
      ],
    },
    {
      id: 102,
      order_no: 209998,
      paid: true,
      table: 4,
      guest: 4,
      total: 379,
      cname: "Hedda Graves",
      payment: "UPI",
      orders: [
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "seafood",
          qty: 41,
          price: 439,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "soups",
          qty: 13,
          price: 215,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "seafood",
          qty: 10,
          price: 381,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "noodles",
          qty: 13,
          price: 297,
        },
      ],
    },
    {
      id: 103,
      order_no: 309997,
      paid: false,
      table: 1,
      guest: 5,
      total: 262,
      cname: "Amethyst Raymond",
      payment: "UPI",
      orders: [
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "stews",
          qty: 18,
          price: 410,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "noodles",
          qty: 42,
          price: 283,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "stews",
          qty: 28,
          price: 391,
        },
      ],
    },
    {
      id: 104,
      order_no: 409996,
      paid: false,
      table: 7,
      guest: 5,
      total: 145,
      cname: "Laurel Nielsen",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "cereals",
          qty: 32,
          price: 428,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "seafood",
          qty: 18,
          price: 401,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "seafood",
          qty: 19,
          price: 326,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "seafood",
          qty: 28,
          price: 437,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "pasta",
          qty: 30,
          price: 465,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "seafood",
          qty: 25,
          price: 314,
        },
      ],
    },
    {
      id: 105,
      order_no: 509995,
      paid: true,
      table: 9,
      guest: 4,
      total: 376,
      cname: "Allistair Haynes",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "salads",
          qty: 18,
          price: 415,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "seafood",
          qty: 31,
          price: 229,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "soups",
          qty: 15,
          price: 446,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "sandwiches",
          qty: 28,
          price: 418,
        },
      ],
    },
    {
      id: 106,
      order_no: 609994,
      paid: true,
      table: 9,
      guest: 2,
      total: 387,
      cname: "Vivien Barber",
      payment: "UPI",
      orders: [
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "pasta",
          qty: 12,
          price: 213,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "salads",
          qty: 25,
          price: 331,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "seafood",
          qty: 24,
          price: 315,
        },
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "soups",
          qty: 9,
          price: 268,
        },
      ],
    },
    {
      id: 107,
      order_no: 709993,
      paid: true,
      table: 4,
      guest: 2,
      total: 219,
      cname: "Zahir Hodges",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "pasta",
          qty: 11,
          price: 492,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "pasta",
          qty: 30,
          price: 466,
        },
        {
          img: "/assets/images/products/Porduct-2.png",
          title: "soups",
          qty: 24,
          price: 219,
        },
      ],
    },
    {
      id: 108,
      order_no: 809992,
      paid: false,
      table: 7,
      guest: 2,
      total: 275,
      cname: "Lee David",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-3.png",
          title: "desserts",
          qty: 33,
          price: 443,
        },
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "salads",
          qty: 27,
          price: 237,
        },
      ],
    },
    {
      id: 109,
      order_no: 909991,
      paid: false,
      table: 5,
      guest: 3,
      total: 275,
      cname: "Uriel Lucas",
      payment: "ONLINE",
      orders: [
        {
          img: "/assets/images/products/Porduct-1.png",
          title: "sandwiches",
          qty: 25,
          price: 289,
        },
      ],
    },
  ]);
  const [activeData, setActiveData] = useState(orders[0]);

  const handleClose = () => setIsOpen(false);
  const handleOpen = (data) => {
    setActiveData(data);
    const width = window.innerWidth;
    if (width <= 768) {
      setIsOpen(true);
    }
  };

  const OnBack = () => {
    navigate("/order");
    setOpration("view");
  };
  if (opration === "view") {
    return (
      <>
        {/* <Header title={"Pending Order"} /> */}
        <div className="grid grid-cols-12 gap-4 mx-5">
          <div className="col-span-12 md:col-span-5">
            <AllOrders handleOpen={handleOpen} orders={orders} />
          </div>
          <div className="col-span-12 md:col-span-7 hidden lg:block md:hidden sm:hidden">
            <OrderDetails setOpration={setOpration} data={activeData} />
          </div>
        </div>
        <Drawer open={isOpen} onClose={handleClose} className="w-100">
          <Drawer.Header titleIcon={() => <></>} />
          <Drawer.Items>
            <OrderDetails setOpration={setOpration} data={activeData} />
          </Drawer.Items>
        </Drawer>
      </>
    );
  } else {
    return (
      <>
        <Common
          OnBack={OnBack}
          img={"/assets/images/banner/invoice_success.svg"}
          title_1={"Invoice Printed Successfully !"}
          title_2={"Please wait fue Minute for print Invoice"}
        />
      </>
    );
  }
};

export default Order;
