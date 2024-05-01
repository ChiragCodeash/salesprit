import React from "react";
import Header from "../Common/Header";
import { Checkbox, Table } from "flowbite-react";
import { Outlet } from "react-router-dom";

const Customers = () => {
  return (
    <>
      <Outlet/>
    </>
  );
};

export default Customers;
