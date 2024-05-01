import React, { useState } from "react";
import Chart from "react-apexcharts";
import Card from "./Card";
import { IconArrowUp } from "@tabler/icons-react";

const Goal = () => {
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
      show: false,
    },
    grid: {
      show: false,
    },
  };

  const dropDownItem = [
    {
      key: "Jan",
      name: "January",
    },
    {
      key: "Feb",
      name: "February",
    },
    {
      key: "Mar",
      name: "March",
    },
    {
      key: "Apr",
      name: "April",
    },
    {
      key: "May",
      name: "May",
    },
  ];

  const DefaultSeriesData = {
    Jan: [500, 600, 700, 750],
    Feb: [250, 300, 350, 400],
    Mar: [100, 95, 150 , 200],
    Apr: [600, 750, 700 , 900],
    May: [130, 135, 150 , 174],
  };

  const [activeTime, setActiveTime] = useState("Apr");
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

  // const series = [
  //   {
  //     name: "Profit",
  //     data: [10, 20, 15, 45],
  //     color: "#F67F20",
  //   },
  // ];
  return (
    <>
      <Card
        title={"Monthly Goal"}
        subtitle={dropDownItem.filter((item)=>item.key === activeTime)[0].name}
        dropDownItem={dropDownItem}
        onChangeTime={onChangeTime}
        activeTime={activeTime}
      >
        <div className="relative w-100">
          <div className="absolute   top-[40px]">
            <h3 className="lg:text-2xl text-xl font-semibold text-success">Profit</h3>
            <div className="flex font-semibold gap-1 items-center lg:text-2xl text-xl   text-success">
              ${series && series[0].data.reduce((acc , ca)=> acc + ca).toFixed(2)}
              <span>
                <IconArrowUp stroke={3} />
              </span>
            </div>
          </div>
          <Chart
            options={options}
            series={series}
            type="area"
            // height={252}
            // width={380}
          />
        </div>
      </Card>
    </>
  );
};

export default Goal;
