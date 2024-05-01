import React from "react";

const InfoCard = ({ active, data ,onClick}) => {
  const { id, order_no, paid, table, guest, total } = data;
  if (active) {
    return (
      <>
        <div className="p-4 bg-primary shadow-lg rounded-md text-light flex flex-col gap-3 cursor-pointer" onClick={onClick}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Order #{order_no}</h3>
            {paid ? (
              <div className="font-semibold">Paid</div>
            ) : (
              <div className="font-semibold">Unpaid</div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 font-semibold">
              <div>Table : {table}</div>
              <div>Guest : {guest}</div>
            </div>
            <h3 className="text-xl font-semibold">${total}</h3>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="p-4 bg-light shadow-lg rounded-md  flex flex-col gap-3 cursor-pointer" onClick={onClick}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Order #{order_no}</h3>
            {paid ? (
              <div className="text-success font-semibold">Paid</div>
            ) : (
              <div className="text-primary font-semibold">Unpaid</div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-gray-500 font-semibold">
              <div>Table : {table}</div>
              <div>Guest : {guest}</div>
            </div>
            <h3 className="text-xl font-semibold">${total}</h3>
          </div>
        </div>
      </>
    );
  }
};

export default InfoCard;
