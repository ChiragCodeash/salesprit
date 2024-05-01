import React, { useContext, useState } from "react";
import { HomeContext, ProductContext } from "../ContextState";

const ProductState = ({ children }) => {
  const { productData, setProductData } = useContext(HomeContext);
  const [id, setId] = useState();
  const [formData, setFormData] = useState({
    title: "",
    qty: "",
    img: "",
    price: "",
    product_id : ""
  });

  const handleDelete = () => {
    setProductData((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdate = (data) => {
    const { id, title, price, img, product_id, qty } = data;
    setProductData((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, title, price: Number(price), qty, img, product_id }; // Update only the specified properties
        }
        return item;
      });
    });
    setFormData({
      title: "",
      qty: "",
      img: "",
      price: "",
      product_id : ""
    });
  };

  const handleAdd = (data)=>{
    const {title ,qty ,img ,price , product_id } = data
    setProductData([...productData, { ...data , id:Date.now() , price : Number(price) }]);
    setFormData({
      title: "",
      qty: "",
      img: "",
      price: "",
      product_id : ""
    });
  }

  const DefaultObj = {
    handleDelete,
    setId,
    setFormData,
    formData,
    handleUpdate,handleAdd,setProductData
  };
  return (
    <ProductContext.Provider value={DefaultObj}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
