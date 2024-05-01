import { IconMinus, IconPhoneFilled, IconPlus } from "@tabler/icons-react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeContext, SettingContext } from "../../context/ContextState";

const Cart = () => {
  const { cartData, Increment, Decrement, billData } = useContext(HomeContext);
  const { profileData} = useContext(SettingContext);
  const { subtotal, tax, discount, total } = billData;

  return (
    <>
      <div className="px-8 py-4   sticky top-0">
        <div className=" border-b-2 flex items-center pb-4">
          <div className="flex-shrink-0">
            <img
              className="h-14 w-14 rounded-full"
              src={profileData.img}
              alt={profileData.fname}
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
              {profileData.fname} {profileData.lname}
            </p>
            <p className="text-sm text-gray-500 capitalize dark:text-gray-400">
            {profileData.position}
            </p>
          </div>

          <button
            type="button"
            className=" border text-light bg-primary   font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ms-2"
          >
            <IconPhoneFilled />
          </button>
        </div>

        <div className="mt-14">
          <div className="my-4">
            <h1 className="font-extrabold text-lg">Order #20235</h1>
          </div>
          <div
            className="flex flex-col gap-3 overflow-auto"
            style={{ height: "30vh" }}
          >
            {cartData.map((item, i) => {
              return (
                <div
                  className="border flex items-center p-2 rounded-lg"
                  key={i}
                >
                  <div className="flex-shrink-0">
                    <img
                      className=" rounded-lg h-16 w-16"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-semibold text-gray-900 pb-1 truncate capitalize dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-primary font-semibold truncate dark:text-gray-400">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button
                      type="button"
                      onClick={() => {
                        Decrement(item.id);
                      }}
                      className=" border text-light bg-secondary   font-medium rounded-full text-sm text-center inline-flex items-center "
                    >
                      <IconMinus className="h-6 w-6 p-1" />
                    </button>
                    {item.qty}
                    <button
                      type="button"
                      onClick={() => {
                        Increment(item.id);
                      }}
                      className=" border text-light bg-dark font-medium rounded-full text-sm text-center inline-flex items-center "
                    >
                      <IconPlus className="h-6 w-6 p-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-start-2"></div>
          <div className="row-start-3"></div>
          <div className="row-start-4"></div>
          <div className="row-start-5"></div>
          <div className="row-start-6"></div>
        </div>

        <div className="border-b-2 border-dashed flex flex-col gap-1 pb-6">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-lg text-dark">Subtotal</h1>
            <h1 className="font-extrabold text-lg text-dark">
              ${subtotal && subtotal}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-md font-semibold text-gray-500">Tex</h1>
            <h1 className="text-md font-semibold text-gray-500">
              ${tax && tax}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-md font-semibold text-gray-500">Discount</h1>
            <h1 className=" text-md font-semibold text-gray-500">
              ${discount && discount}
            </h1>
          </div>
        </div>
        <div className="my-5">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-lg text-dark">Total</h1>
            <h1 className="font-extrabold text-lg text-dark">
              ${total && total}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div></div>
          <div className="row-start-2"></div>
          <div className="row-start-3"></div>
          <div className="row-start-4"></div>
          <div className="row-start-5"></div>
          <div className="row-start-6"></div>
        </div>

        <div>
          <Link
            to={"/placeorder"}
            type="button"
            className="text-white bg-dark text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-4 w-100 me-2 mb-2  focus:outline-none "
          >
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
