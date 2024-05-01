import React, { useEffect, useState } from "react";
import { HomeContext } from "../ContextState";

const HomeState = ({ children }) => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      title: "pasta",
      qty: 26,
      price: 72,
      rating: 2,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 670247,
    },
    {
      id: 2,
      title: "desserts",
      qty: 72,
      price: 69,
      rating: 4,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 298983,
    },
    {
      id: 3,
      title: "noodles",
      qty: 11,
      price: 83,
      rating: 3,
      img: "/assets/images/products/Porduct-3.png",
      product_id: 544150,
    },
    {
      id: 4,
      title: "salads",
      qty: 50,
      price: 91,
      rating: 4,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 289587,
    },
    {
      id: 5,
      title: "soups",
      qty: 95,
      price: 28,
      rating: 2,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 923199,
    },
    {
      id: 6,
      title: "seafood",
      qty: 80,
      price: 42,
      rating: 5,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 520347,
    },
    {
      id: 7,
      title: "salads",
      qty: 14,
      price: 24,
      rating: 4,
      img: "/assets/images/products/Porduct-1.png",
      product_id: 853900,
    },
    {
      id: 8,
      title: "soups",
      qty: 47,
      price: 14,
      rating: 1,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 216447,
    },
    {
      id: 9,
      title: "desserts",
      qty: 45,
      price: 26,
      rating: 2,
      img: "/assets/images/products/Porduct-1.png",
      product_id: 642666,
    },
    {
      id: 10,
      title: "cereals",
      qty: 12,
      price: 78,
      rating: 2,
      img: "/assets/images/products/Porduct-3.png",
      product_id: 983306,
    },
    {
      id: 11,
      title: "desserts",
      qty: 47,
      price: 81,
      rating: 2,
      img: "/assets/images/products/Porduct-2.png",
      product_id: 715926,
    },
    {
      id: 12,
      title: "stews",
      qty: 54,
      price: 10,
      rating: 2,
      img: "/assets/images/products/Porduct-3.png",
      product_id: 701532,
    },
    {
      id: 13,
      title: "stews",
      qty: 33,
      price: 96,
      rating: 3,
      img: "/assets/images/products/Porduct-1.png",
      product_id: 114036,
    },
    {
      id: 14,
      title: "pies",
      qty: 66,
      price: 39,
      rating: 4,
      img: "/assets/images/products/Porduct-3.png",
      product_id: 163948,
    },
    {
      id: 15,
      title: "sandwiches",
      qty: 49,
      price: 64,
      rating: 2,
      img: "/assets/images/products/Porduct-1.png",
      product_id: 493675,
    },
  ]);

  const [cartData, setCartData] = useState([
    {
      id: 1,
      img: "/assets/images/products/Porduct-1.png",
      title: "noodles",
      price: 19,
      qty: 1,
    },
    {
      id: 2,
      img: "/assets/images/products/Porduct-1.png",
      title: "soups",
      price: 89,
      qty: 2,
    },
    {
      id: 3,
      img: "/assets/images/products/Porduct-1.png",
      title: "stews",
      price: 59,
      qty: 2,
    },
  ]);
  const [billData, setBillData] = useState({
    subtotal: "",
    tax: "",
    discount: "",
    total: "",
  });

  const Increment = (id) => {
    setCartData((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  };

  const Decrement = (id) => {
    setCartData((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            RemoveFromCart(id);
          }
        }
        return item;
      })
    );
  };

  const RemoveFromCart = (id) => {
    setCartData((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const AddToCart = (data, id) => {
    const isAdded = cartData.filter((item) => item.id === id);
    if (!isAdded.length) {
      setCartData([...cartData, { ...data, qty: 1 }]);
    } else {
      Increment(id);
    }
  };

  const CalculateData = () => {
    const subtotal = cartData.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    const tax = (subtotal * 5) / 100;
    const discount = ((subtotal - tax) * 20) / 100;
    const total = (subtotal + tax - discount).toFixed(2);
    setBillData({
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toString(2),
    });
  };

  useEffect(() => {
    CalculateData();
  }, [cartData]);

  const DefaultObj = {
    productData,setProductData,
    cartData,
    Increment,
    Decrement,
    RemoveFromCart,
    AddToCart,
    billData,
  };
  return (
    <HomeContext.Provider value={DefaultObj}>{children}</HomeContext.Provider>
  );
};

export default HomeState;
