import { IconBarcode, IconBellRingingFilled } from "@tabler/icons-react";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import { HomeContext } from "../../context/ContextState";

const SearchBar = () => {
  return (
    <div className="lg:w-1/2 w-full">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      ></label>
      <div className="flex relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Here"
          required=""
        />
        <button
          type="submit"
          className="text-primary absolute end-2.5 bottom-2 font-medium rounded-lg text-sm  "
          style={{ bottom: "11px", right: "70px" }}
        >
          <IconBarcode />
        </button>
        <Link
          to={"/notification"}
          type="button"
          className=" border text-light bg-dark   font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ms-2"
        >
          <IconBellRingingFilled />
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const { productData} = useContext(HomeContext)
 
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-light">
            <Header CustomeHeader={<SearchBar />} title={" "} />
            <div className="bg-light">
              <div className=" px-4 pb-4">
                <h2 className="text-2xl font-semibold dark:text-white">
                  Special Menu For You
                </h2>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 p-4">
            {/* <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 sm:border-2 sm:border-blue-600 xl:border-2 xl:border-red-600 lg:border-2 lg:border-yellow-600 md:border-2 md:border-green-900  gap-4"> */}
            {productData.map((item, i) => {
              return (
                <ProductCard
                 data={item}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 hidden lg:block md:hidden sm:hidden border-l-2 ">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Home;
