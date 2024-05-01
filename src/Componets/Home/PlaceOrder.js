import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import { IconCaretRightFilled, IconMinus, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HomeContext } from "../../context/ContextState";
import moment from "moment";
const PlaceOrder = () => {
  const { Decrement, Increment, billData, cartData } = useContext(HomeContext);
  const { subtotal, total, tax, discount } = billData;
  const navigate = useNavigate();
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [orderState, setOrderState] = useState("placeorder");
  const [isValidate, setValidate] = useState(false);

  const [customer, setCustomer] = useState({
    recipent: "",
    gender: "",
    city: "",
    phone: "",
    email: "",
    cid: "",
    address: "",
  });

  useEffect(() => {
    for (const [key, value] of Object.entries(customer)) {
      if (!value) {
        setValidate(true);
        break;
      } else {
        setValidate(false);
      }
    }
  }, [customer]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const OnPlaceOrder = () => {
    setOrderState("success");
  };

  const OnPrintInvoice = () => {
    setInvoiceModal(false);
    setOrderState("printinvoice");
  };

  const OnBack = () => {
    navigate("/");
    setOrderState("placeorder");
  };
  const ModalShow = () => {
    setInvoiceModal(true);
  };

  const Common = ({ img, title_1, title_2 }) => {
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
  return (
    <>
      {orderState === "placeorder" ? (
        <>
          <Header title={"Order #20235"} />
          <div className="px-10">
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label htmlFor="recipent" className={labelClasses}>
                  Recipent:
                </label>
                <input
                  type="text"
                  id="recipent"
                  name="recipent"
                  value={customer.recipent}
                  className={inputClasses}
                  placeholder="Sarah Moanees"
                  onChange={handleForm}
                />
              </div>
              <div>
                <label htmlFor="gender" className={labelClasses}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleForm}
                  value={customer.gender}
                  className={inputClasses}
                >
                  <option defaultValue={""}>Choose Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className={labelClasses}>
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={customer.city}
                  className={inputClasses}
                  placeholder="United States"
                  onChange={handleForm}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customer.phone}
                  className={inputClasses}
                  placeholder="123-45-678"
                  onChange={handleForm}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customer.email}
                  className={inputClasses}
                  onChange={handleForm}
                  placeholder="sarah259@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="cid" className={labelClasses}>
                  Customer ID :
                </label>
                <input
                  type="text"
                  id="cid"
                  name="cid"
                  value={customer.cid}
                  className={inputClasses}
                  onChange={handleForm}
                  placeholder="6675894235"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="address" className={labelClasses}>
                Address
              </label>
              <textarea
                rows={5}
                id="address"
                name="address"
                value={customer.address}
                className={inputClasses}
                onChange={handleForm}
                placeholder="2603 Jadewood Drive"
              />
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 xl:col-span-6   ">
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
                          <p className="text-sm font-semibold text-gray-900 pb-1 truncate dark:text-white capitalize">
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
                            className=" border text-light bg-dark   font-medium rounded-full text-sm text-center inline-flex items-center "
                          >
                            <IconPlus className="h-6 w-6 p-1" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-6 xl:mx-28">
                <div className="border-b-2 border-dashed flex flex-col gap-1 pb-6">
                  <div className="flex justify-between">
                    <h1 className="font-extrabold text-lg text-dark">
                      Subtotal
                    </h1>
                    <h1 className="font-extrabold text-lg text-dark">
                      ${subtotal}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-md font-semibold text-gray-500">Tex</h1>
                    <h1 className="text-md font-semibold text-gray-500">
                      ${tax}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-md font-semibold text-gray-500">
                      Discount
                    </h1>
                    <h1 className=" text-md font-semibold text-gray-500">
                      ${discount}
                    </h1>
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex justify-between">
                    <h1 className="font-extrabold text-lg text-dark">Total</h1>
                    <h1 className="font-extrabold text-lg text-dark">
                      ${total}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-7">
                  <button
                    onClick={ModalShow}
                    type="button"
                    disabled={isValidate}
                    className="text-white bg-primary text-light  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm p-4 w-100  mb-2  focus:outline-none disabled:cursor-not-allowed disabled:bg-orange-300"
                  >
                    Print
                  </button>
                  <button
                    type="button"
                    onClick={OnPlaceOrder}
                    disabled={isValidate}
                    className="text-white flex-grow bg-dark text-light disabled:cursor-not-allowed disabled:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-4 w-100  mb-2  focus:outline-none "
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : orderState === "printinvoice" ? (
        <Common
          redirect={"/"}
          img={"/assets/images/banner/invoice_success.svg"}
          title_1={"Invoice Printed Successfully !"}
          title_2={"Please wait fue Minute for print Invoice"}
        />
      ) : (
        <Common
          redirect={"/"}
          img={"/assets/images/banner/order_place.svg"}
          title_1={"Your Order Placed Successfully !"}
          title_2={"Please wait for 5-10 Minute for your order"}
        />
      )}

      <Modal
        show={invoiceModal}
        onClose={() => setInvoiceModal(false)}
        size={"lg"}
      >
        <div className="modal-bg">
          <Modal.Header className="">
           <span className="font-semibold text-lg text-black">
           Recipent</span> 
          </Modal.Header>
          <Modal.Body className="lg:p-0 p-6">
            <div className="md:p-5 space-y-4">
              <div className="border-b-2  flex flex-col gap-1 pb-6">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Recipent</h1>
                  <h1 className="font-semibold text-lg text-black">
                    {customer.recipent}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">
                    Customer ID
                  </h1>
                  <h1 className="font-semibold text-lg text-black">
                    {customer.cid}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Date</h1>
                  <h1 className="font-semibold text-lg text-black">
                    {moment().format("DD-MM-YYYY")}
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-1 pb-6">
                {/* <div className="relative overflow-x-auto"> */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    {cartData.map((item, i) => {
                      return (
                        <tr className="" key={i}>
                          <td className="font-semibold capitalize text-md text-black">
                            {i + 1}.) {item.title}
                          </td>
                          <td className="font-semibold text-md text-black px-6 py-2 ">
                            {item.qty}
                          </td>
                          <td className="font-semibold text-md text-black  py-2 text-right">
                            ${item.price.toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="border-b-2 border-dashed flex flex-col gap-1 pb-6">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Subtotal</h1>
                  <h1 className="font-semibold text-lg text-black">
                    ${subtotal}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-md font-semibold text-gray-500">Tex</h1>
                  <h1 className="text-md font-semibold text-gray-500">
                    ${tax}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-md font-semibold text-gray-500">
                    Discount
                  </h1>
                  <h1 className=" text-md font-semibold text-gray-500">
                    ${discount}
                  </h1>
                </div>
              </div>
              <div className="my-5">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Total</h1>
                  <h1 className="font-semibold text-lg text-black">${total}</h1>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <div className="flex items-center p-5 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"> */}
            <button
              type="button"
              onClick={OnPrintInvoice}
              className="bg-dark font-medium m-auto px-10 py-4 rounded-lg text-center text-sm text-white "
            >
              Print Invoice
            </button>
            {/* </div> */}
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default PlaceOrder;
