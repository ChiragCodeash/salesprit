import React, { useState } from "react";
import Chart from "react-apexcharts";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
const TotalIncome = () => {
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#F67F20", "#003048", "#12991F"],
    labels: ["Food", "Drinks", "Others"],
    legend: {
      position: "bottom",
      fontFamily: "Poppins",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: false,
              fontFamily: "Poppins",
              offsetY: 50,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Total",
              fontFamily: "Poppins",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Poppins",
              offsetY: 10,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "70%",
        },
      },
    },
  };

  const dropDownItem = [
    {
      key : "today",
      name : "Today",
    },
    {
      key : "week",
      name : "This week",
    },
    {
      key : "month",
      name : "This month",
    },
  ]
  const DefaultSeriesData = {
    today: [50, 60, 70],
    week: [100, 75, 85],
    month: [169, 180, 150],
  };
  const [activeTime, setActiveTime] = useState("today");
  const [series, setSeries] = useState(DefaultSeriesData[activeTime]);

  const onChangeTime = (time) => {
    setActiveTime(time);
    setSeries(DefaultSeriesData[time]);
  };
  return (
    <>
      <Card
        title={"Total Income"}
        activeTime={activeTime}
        onChangeTime={onChangeTime}
        dropDownItem={dropDownItem}
      >
        <Chart options={options} series={series} type="donut" width="380"  />
      </Card>
    </>
  );
};

export default TotalIncome;
