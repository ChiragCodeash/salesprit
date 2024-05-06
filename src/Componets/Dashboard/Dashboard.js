import React from "react";
import Header from "../Common/Header";
import TotalIncome from "./TotalIncome";
import Goal from "./Goal";
import TotalBalance from "./TotalBalance";
import DailySelling from "./DailySelling";
import Dishes from "./Dishes";
import { useContext } from "react";
import { DashboardContext } from "../../context/ContextState";

const Dashboard = () => {
  return (
    <>
      <Header title={"Manager Dashboard"} />
      <div>
        <div className="grid grid-cols-1  md:grid-cols-2 mx-5 gap-4">
          <div className="">
            <TotalIncome />
          </div>
          <div className="">
            <Goal />
          </div>
          <div className="">
            <TotalBalance />
          </div>
        </div>
        <div className="grid grid-cols-12  md:grid-cols-2 gap-4 m-5">
          <div className="col-span-12 md:col-span-8">
            <DailySelling/>
          </div>
          <div className="col-span-12 md:col-span-4"><Dishes/></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
