import React, { useState } from "react";
import Card from "./Card";
import { IconChartBar, IconWallet } from "@tabler/icons-react";

const TotalBalance = () => {
  const dropDownItem = [
    {
      key: "today",
      name: "Today",
    },
    {
      key: "week",
      name: "Last week",
    },
    {
      key: "month",
      name: "Last month",
    },
  ];
  const DefaultSeriesData = {
    today: {
      total_income: "15960",
      total_expense: "2689",
    },
    week: {
      total_income: "8952",
      total_expense: "9510",
    },
    month: {
      total_income: "16954",
      total_expense: "1475",
    },
  };
  const [activeTime, setActiveTime] = useState("today");
  const [total, setTotal] = useState(DefaultSeriesData[activeTime]);

  const onChangeTime = (time) => {
    setActiveTime(time);
    setTotal(DefaultSeriesData[time]);
  };
  return (
    <>
      <Card
        title={"Total Balance"}
        dropDownItem={dropDownItem}
        activeTime={activeTime}
        onChangeTime={onChangeTime}
      >
        <div className="w-100">
          <div className="mt-5">
            {
              total.total_income - total.total_expense <= 0 ?

              <h5 className="font-bold p-5 text-4xl text-red-600 text-center"> ${(total.total_income - total.total_expense).toFixed(2)}</h5>:
            
              <h5 className="font-bold p-5 text-4xl text-success text-center">${(total.total_income - total.total_expense).toFixed(2)}</h5>
            }
              
          </div>
          <div className="mt-6">
            <div className=" flex items-center p-2 rounded-lg">
              <div className="bg-dark flex-shrink-0 p-4 rounded-full text-light ">
                <IconChartBar height={30} width={30} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xl font-bold text-gray-900  truncate dark:text-white">
                  Total Income
                </p>
                <p className="text-md  font-semibold truncate dark:text-gray-400">
                  ${total.total_income}
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <p className="text-sm font-semibold text-gray-500">(+ 20%)</p>
              </div>
            </div>
            <div className=" flex items-center p-2 rounded-lg">
              <div className="bg-primary flex-shrink-0 p-4 rounded-full text-light ">
                <IconWallet height={30} width={30} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xl font-bold text-gray-900  truncate dark:text-white">
                  Total Expense
                </p>
                <p className="text-md  font-semibold truncate dark:text-gray-400">
                  ${total.total_expense}
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <p className="text-sm font-semibold text-gray-500">(+ 20%)</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TotalBalance;
