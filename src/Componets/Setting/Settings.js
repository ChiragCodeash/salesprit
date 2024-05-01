import React, { useContext, useState } from "react";
import Header from "../Common/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  IconChevronRight,
  IconClockHour3Filled,
  IconEdit,
  IconKeyFilled,
  IconLanguage,
  IconUserFilled,
  IconUsers,
} from "@tabler/icons-react";
import { SettingContext } from "../../context/ContextState";

const Settings = () => {
  const { profileData ,setProfileData } = useContext(SettingContext);
  const location = useLocation();
  const NavigationBar = [
    {
      name: "Profile",
      icon: <IconUserFilled />,
      to: "/setting",
      activeList: ["/setting"],
    },
    {
      name: "Employee",
      icon: <IconUsers />,
      to: "/setting/employee",
      activeList: ["/setting/employee"],
    },
    {
      name: "Hours",
      icon: <IconClockHour3Filled />,
      to: "/setting/opening_hour",
      activeList: ["/setting/opening_hour"],
    },
    {
      name: "Credential",
      icon: <IconKeyFilled />,
      to: "/setting/reset_pass",
      activeList: ["/setting/reset_pass"],
    },
    {
      name: "Language",
      icon: <IconLanguage />,
      to: "/setting/lang_and_reg",
      activeList: ["/setting/lang_and_reg"],
    },
  ];

  const SettingList = [
    {
      name: "Personal Information",
      link: "",
      activeList: ["/setting"],
    },
    {
      name: "Employee Management",
      link: "employee",
      activeList: ["/setting/employee"],
    },
    {
      name: "Opening Hours",
      link: "opening_hour",
      activeList: ["/setting/opening_hour"],
    },
    {
      name: "Login & Password",
      link: "reset_pass",
      activeList: ["/setting/reset_pass"],
    },
    {
      name: "Language & Region",
      link: "lang_and_reg",
      activeList: ["/setting/lang_and_reg"],
    },
  ];

  const width = window.innerWidth;
  if (width > 768) {
    return (
      <>
        <Header title={"Setting"} />
        <div className="grid grid-cols-12 gap-4 mx-5">
          <div className="col-span-12 md:col-span-5 ">
            <div
              className="shadow-xl border-2 p-4 lg:p-8 rounded-lg overflow-auto "
              style={{ height: "81vh" }}
            >
              <div className="w-full  bg-white p-6 border-b-2">
                <div className="flex flex-col items-center pb-10">
                  <button
                    type="button"
                    className="relative  items-center p-3 text-sm font-medium text-center"
                  >
                    <img
                      className="w-52 h-52 mb-3 rounded-full shadow-lg"
                      src={profileData.img}
                      alt="Bonnie"
                    />
                    <div className="absolute bg-dark border-4 border-white end-2 font-bold inline-flex items-center justify-center p-1.5 rounded-full text-white text-xs top-10">
                      <IconEdit height={25} width={25} />
                      <input
                        type="file"
                        name="img"
                        onChange={(e)=>{
                          setProfileData({...profileData , img : URL.createObjectURL(e.target.files[0])})
                        }}
                        className="absolute opacity-0"
                        accept=".png, .jpg, .jpeg"
                      />
                    </div>
                  </button>
                  <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {profileData.fname} {profileData.lname}
                  </h5>
                  <span className="text-sm font-semibold capitalize text-gray-500 dark:text-gray-400">
                    {profileData.position}
                  </span>
                </div>
              </div>

              <div className="mt-5 ">
                <div className="flex flex-col gap-4">
                  {SettingList.map((item, i) => {
                    return (
                      <Link
                        to={item.link}
                        className={`flex justify-between items-center cursor-pointer ${
                          item.activeList.includes(location.pathname) &&
                          "text-primary"
                        }`}
                        key={i}
                      >
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <IconChevronRight />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5">
                <Link
                  to={"/auth"}
                  className="font-semibold text-lg text-primary"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 hidden lg:block md:hidden sm:hidden px-5  ">
            <Outlet />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="col-span-12 md:col-span-7 p-5 ">
        <Outlet />
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
            {NavigationBar.map((item, i) => {
              return (
                <Link
                  to={item.to}
                  type="button"
                  className={`inline-flex flex-col items-center hover:text-orange-500 text-gray-500 justify-center px-5 hover:bg-gray-50 group ${
                    item.activeList.includes(location.pathname) &&
                    "text-orange-500"
                  }`}
                >
                  {item.icon}
                  <span
                    className={`${
                      item.activeList.includes(location.pathname) &&
                      "text-orange-500"
                    } text-sm text-gray-500  group-hover:text-orange-500`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
