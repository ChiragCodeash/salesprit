import React from "react";
import SettingHeader from "./SettingHeader";
import { IconChevronLeft, IconPointFilled } from "@tabler/icons-react";

const OpeningHour = () => {
  const Timing = [
    {
      name: "Monday",
      time: "08am - 09pm",
    },
    {
      name: "Tuesday",
      time: "08am - 09pm",
    },
    {
      name: "Wednesday",
      time: "08am - 09pm",
    },
    {
      name: "Thursday",
      time: "08am - 09pm",
    },
    {
      name: "Friday",
      time: "08am - 09pm",
    },
    {
      name: "Saturday",
      time: "08am - 09pm",
    },
    {
      name: "Sunday",
      time: "08am - 05pm",
    },
  ];
  return (
    <>
      <SettingHeader title={"Opening Hours"} />
      <div className="mt-5">
        <div className="shadow-xl border-2 rounded-xl">
          <div className="p-5 items-center flex justify-between border-b-2">
            <IconChevronLeft height={35} width={35} className="cursor-pointer" />
            <h3 className="font-bold text-xl">Opening Hours</h3>
            <h3 className="font-semibold text-primary text-lg cursor-pointer">Edit</h3>
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-4 p-6">
              {Timing.map((item, i) => {
                return (
                  <div className="flex  justify-between items-center" key={i}>
                    <h3 className="font-semibold text-lg flex items-center">
                      <IconPointFilled className="text-primary "/>
                      {item.name}
                    </h3>
                    <h3 className="font-semibold text-lg">{item.time}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningHour;
