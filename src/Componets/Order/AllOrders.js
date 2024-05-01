import { IconDotsVertical } from "@tabler/icons-react";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import Header from "../Common/Header";

const AllOrders = ({ handleOpen, orders }) => {
  const [activeOrder, setActiveOrder] = useState(orders[0].id);

  return (
    <>
    <Header title={"Pending Order"} /> 
      <div className="shadow-xl border-2">
        <div className="header border-b flex justify-between p-5 items-center">
          <h3 className="text-2xl font-bold">All Orders</h3>
          {/* <IconDotsVertical className="cursor-pointer" /> */}
        </div>
        <div
          className="p-5 flex flex-col gap-4 overflow-auto"
          style={{ height: "75vh" }}
        >
          {orders.map((item, i) => {
            return (
              <InfoCard
                active={item.id === activeOrder}
                data={item}
                key={i}
                onClick={() => {
                  setActiveOrder(item.id);
                  handleOpen(item);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllOrders;
