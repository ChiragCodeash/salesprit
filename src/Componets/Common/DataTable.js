import { IconEdit, IconTrashFilled } from "@tabler/icons-react";
import React from "react";

const DataTable = ({ cols, data, OnDelete, OnEdit }) => {
  const width = 100 / cols.length;
  return (
    <>
      <div className="relative shadow-xl">
        <table className="w-full text-sm text-left  text-gray-500">
          <thead className="text-xs text-gray-600 border-b uppercase bg-gray-50  sticky top-0 ">
            <tr className="text-center text-sm ">
              {cols.map(({ header }, i) => {
                return (
                  <th
                    scope="col"
                    className="p-6  sticky top-0 bg-light"
                    key={i}
                  >
                    {header}
                  </th>
                );
              })}
              <th scope="col" className="p-6  bg-light sticky top-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
                  key={index}
                >
                  {cols.map(({ accessor, type }, i) => {
                    if (type === "object") {
                      return (
                        <td
                          className="border-b px-6 py-4 font-semibold  text-gray-900 whitespace-nowrap"
                          key={i}
                        >
                          <div className="flex items-center m-auto py-2 rounded-lg w-full lg:w-1/2">
                            <img
                              className="me-3 rounded-lg w-12"
                              src={item["img"]}
                              alt="Food"
                            />
                            <p className="text-md font-bold text-gray-900 capitalize ">
                              {item[accessor]}
                            </p>
                          </div>
                        </td>
                      );
                    } else {
                      if (accessor === "price") {
                        return (
                          <td
                            className=" border-b px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                            key={i}
                          >
                            ${item[accessor].toFixed(2)}
                          </td>
                        );
                      } else {
                        return (
                          <td
                            className=" border-b px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                            key={i}
                          >
                            {item[accessor]}
                          </td>
                        );
                      }
                    }
                  })}

                  <td className="border-b px-6 py-4">
                    <div className="flex justify-evenly px-6 py-4">
                      <div
                        className=" cursor-pointer font-semibold text-md text-success flex items-center "
                        onClick={()=>{OnEdit(item)}}
                      >
                        <IconEdit className="me-1" />
                        <span>Edit</span>
                      </div>
                      <div
                        className=" cursor-pointer flex font-semibold items-center text-md text-primary"
                        onClick={()=>{OnDelete(item.id)}}
                      >
                        <IconTrashFilled className="me-1" />
                        <span>Delete</span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
