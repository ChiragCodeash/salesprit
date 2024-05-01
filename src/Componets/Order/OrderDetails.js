import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useEffect } from "react";

export const DetailsInfoCard = ({data}) => {
  const {img , title , qty , price} =data
  return (
    <>
      <div className=" flex items-center p-2 rounded-lg border-2">
        <img
          className=" rounded-lg w-16"
          src={img}
        />

        <div className="flex-1 min-w-0 ms-4">
          <p className="text-xl font-bold text-gray-900 capitalize  truncate dark:text-white">
            {title} <span>X {qty}</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-xl font-semibold text-primary">${price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

const OrderDetails = ({ setOpration, data }) => {
  const { id, order_no, paid, table, guest ,cname, payment ,orders } = data;
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [billData, setBillData] = useState({
    subtotal: "",
    tax: "",
    discount: "",
    total: "",
  });

  const CalculateData = () => {
    const subtotal = orders.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    const tax = (subtotal * 5) / 100;
    const discount = ((subtotal - tax) * 20) / 100;
    const total = (subtotal + tax - discount).toFixed(2);
    setBillData({ subtotal : subtotal.toFixed(2), tax : tax.toFixed(2), discount : discount.toFixed(2), total : total.toString(2) });
  };

  useEffect(()=>{
    CalculateData()
  },[orders])


  const ModalShow = () => {
    setInvoiceModal(true);
  };

  const onPrint = () => {
    setOpration("success");
  };

  return (
    <>
      {/* <div> */}
      <div className="header border-b flex justify-between p-5 items-center">
        <h3 className="text-2xl font-bold">Order #{order_no}</h3>
        {
          paid ? (<h3 className="text-lg font-semibold text-success">Paid</h3>) : (<h3 className="text-lg font-semibold text-primary">Unpaid</h3>)
        }
        
      </div>
      <div className="p-5">
        <h3 className="text-xl py-3 font-semibold ">Details</h3>
        <div className="py-5 flex justify-between flex-wrap">
          <div>
            <h3 className="font-semibold text-xl text-center">Table No</h3>
            <h3 className="font-semibold text-xl text-gray-500 text-center">
              {table}
            </h3>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-center">Guest</h3>
            <h3 className="font-semibold text-xl text-gray-500 text-center">
             {guest}
            </h3>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-center">Customer</h3>
            <h3 className="font-semibold text-xl text-gray-500 text-center">
              {cname}
            </h3>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-center">Payment</h3>
            <h3 className="font-semibold text-xl text-gray-500 text-center">
              {payment}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl py-3 font-semibold">Orders</h3>
        <div
          className="flex flex-col gap-3  overflow-auto"
          style={{ height: "52vh" }}
        >
         {orders.map((item , i)=>{
          return(
            <DetailsInfoCard data={item} key={i}/>
          )
         })}
        </div>
        <div>
          <button
            className="text-white bg-dark text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-4 w-100 mt-4  focus:outline-none "
            onClick={ModalShow}
          >
            Print Invoice
          </button>
        </div>
      </div>

      {/* Invoice Modal */}
      <Modal
        show={invoiceModal}
        onClose={() => setInvoiceModal(false)}
        size={"lg"}
      >
        <div className="modal-bg">
          <Modal.Header>
            <h1 className="font-semibold text-lg text-black">Order #{order_no}</h1>
          </Modal.Header>
          <Modal.Body className="lg:p-0 p-6">
            <div className="md:p-5 space-y-4">
              <div className="border-b-2  flex flex-col gap-1 pb-6">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Customer Name</h1>
                  <h1 className="font-semibold text-lg capitalize text-black">
                    {cname}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">
                    Guest
                  </h1>
                  <h1 className="font-semibold text-lg text-black">
                   {guest}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Payment</h1>
                  <h1 className="font-semibold text-lg text-black">{payment}</h1>
                </div>
              </div>

              <div className="flex flex-col gap-1 pb-6">
                {/* <div className="relative overflow-x-auto"> */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    {orders.map((item, i) => {
                      return (
                        <tr className="" key={i}>
                          <td className="font-semibold capitalize text-md text-black">
                            {i + 1}). {item.title}
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
                  <h1 className="font-semibold text-lg text-black">${billData.subtotal}</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-md font-semibold text-gray-500">Tex</h1>
                  <h1 className="text-md font-semibold text-gray-500">
                    ${billData.tax}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-md font-semibold text-gray-500">
                    Discount
                  </h1>
                  <h1 className=" text-md font-semibold text-gray-500">
                    ${billData.discount}
                  </h1>
                </div>
              </div>
              <div className="my-5">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg text-black">Total</h1>
                  <h1 className="font-semibold text-lg text-black">${billData.total}</h1>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <div className="flex items-center p-5 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"> */}
            <button
              data-modal-hide="invoice"
              type="button"
              onClick={onPrint}
              className="bg-dark font-medium m-auto px-10 py-4 rounded-lg text-center text-sm text-white"
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

export default OrderDetails;
