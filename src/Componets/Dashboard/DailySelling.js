import React, { useState } from "react";
import Card from "./Card";
import Chart from "react-apexcharts";
const duration = ["Today", "Week", "Month", "Year"];

export const TopBar = ({dropDownItem , onChangeTime ,activeTime  }) => {
  return (
    <div className="flex font-semibold gap-6 flex-wrap">
      {dropDownItem.map((item, i) => {
        return (
          <div
            className={`cursor-pointer capitalize ${item.key === activeTime ? "text-primary" : ""}`}
            key={i}
            onClick={()=>{onChangeTime(item.key)}}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

const DailySelling = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
    grid: {
      show: true,
    },
  };

  // const series = [
  //   {
  //     name: "Series 1",
  //     data: [1456 , 1496 , 1498 , 1459 , 1369 , 1459 , 1460],
  //     color: "#F67F20",
  //   },
  // ];

  const dropDownItem = [
    {
      key : "today",
      name : "Today",
    },
    {
      key : "week",
      name : "week",
    },
    {
      key : "month",
      name : "month",
    },
    {
      key : "year",
      name : "year",
    },
  ];

  const DefaultSeriesData = {
    today: [1456 , 1496 , 1498 , 1459 , 1369 , 1459 , 1460],
    week: [1489 , 1459 , 1426 , 1451 , 1369 , 1423 , 1412],
    month: [1495 , 1436 , 1445 , 1449 , 1326 , 1459 , 1447],
    year: [1411 , 1422 , 1433 , 1466 , 1399 , 1449 , 1445],
  };

  const [activeTime, setActiveTime] = useState("today");
  const [series, setSeries] = useState([
    {
      name: "Profit",
      data: DefaultSeriesData[activeTime],
      color: "#F67F20",
    },
  ]);

  const onChangeTime = (time) => {
    setActiveTime(time);
    setSeries([{ ...series[0], data: DefaultSeriesData[time] }]);
  };
  return (
    <>
      <Card title={"Daily Selling"} CustomeHeader={<TopBar dropDownItem={dropDownItem} onChangeTime={onChangeTime} activeTime={activeTime}/>}>
        <div className="w-100">
          <Chart options={options} series={series} type="area" />
        </div>
      </Card>
    </>
  );
};

export default DailySelling;
