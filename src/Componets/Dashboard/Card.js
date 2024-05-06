import { IconDotsVertical } from "@tabler/icons-react";
import React, { useId } from "react";
import { Dropdown } from "flowbite-react";

const Card = ({ title, children, className, subtitle, CustomeHeader ,onChangeTime, activeTime , dropDownItem }) => {
  return (
    <>
      <div
        className={` ${className} block h-100 p-6 bg-light border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
      >
        <div className="flex justify-between flex-wrap">
          <div>
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            {subtitle && (
              <p className="font-semibold text-gray-500 text-sm">{subtitle}</p>
            )}
          </div>
          <div>
            {!CustomeHeader ? (
              // <button
              //   id={dropDownId}
              //   data-dropdown-toggle={dropDownId}
              //   className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              //   type="button"
              // >
              //   <span className="sr-only">Open dropdown</span>
              //   <IconDotsVertical />
              // </button>
              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                  <IconDotsVertical className="cursor-pointer" />
                )}
              >
                {/* <Dropdown.Item onClick={()=>{onChangeTime("today")}} className={`capitalize font-semibold ${activeTime === "today" && "text-primary"}`}>Today</Dropdown.Item>
                <Dropdown.Item onClick={()=>{onChangeTime("week")}} className={`capitalize font-semibold ${activeTime === "week" && "text-primary"}`}>This week</Dropdown.Item>
                <Dropdown.Item onClick={()=>{onChangeTime("month")}} className={`capitalize font-semibold ${activeTime === "month" && "text-primary"}`}>This month</Dropdown.Item> */}
                {
                  dropDownItem && dropDownItem.map((item ,i )=>{
                    return(
                      <Dropdown.Item key={i} onClick={()=>{onChangeTime(item.key)}} className={`capitalize font-semibold ${activeTime === item.key && "text-primary"}`}>{item.name}</Dropdown.Item>
                    )
                  })
                }
              </Dropdown>
            ) : (
              CustomeHeader
            )}
       
          </div>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </>
  );
};

export default Card;
