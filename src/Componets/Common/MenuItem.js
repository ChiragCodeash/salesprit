import React, { useContext } from "react";
import {
  IconBellFilled,
  IconBubbleFilled,
  IconClipboardText,
  IconHomeFilled,
  IconLayoutDashboardFilled,
  IconLogout,
  IconSettingsFilled,
  IconSquareArrowDownFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/ContextState";

const MenuItem = () => {
    const {CloseMenu} = useContext(GlobalContext)
  const IconClass =
    "flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
  const menuItem = [
    {
      name: "Home",
      icon: <IconHomeFilled className={IconClass} />,
      link: "/",
      activeList: ["/", "/placeorder"],
    },
    {
      name: "Dashboard",
      icon: <IconLayoutDashboardFilled className={IconClass} />,
      link: "/dashboard",
      activeList: ["/dashboard"],
    },
    {
      name: "Order",
      icon: <IconClipboardText className={IconClass} />,
      link: "/order",
      activeList: ["/order"],
    },
    {
      name: "Product",
      icon: (
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        </svg>
      ),
      link: "/product",
      activeList: ["/product"],
    },
    {
      name: "Notification",
      icon: <IconBellFilled className={IconClass} />,
      link: "/notification",
      activeList: ["/notification"],
    },
    {
      name: "Customers",
      icon: <IconUserFilled className={IconClass} />,
      link: "/customers",
      activeList: ["/customers", "/customers/edit"],
    },
    {
      name: "Message",
      icon: <IconBubbleFilled className={IconClass} />,
      link: "/message",
      activeList: ["/message"],
    },
    {
      name: "Setting",
      icon: <IconSettingsFilled className={IconClass} />,
      link: "/setting",
      activeList: [
        "/setting",
        "/setting/employee",
        "/setting/opening_hour",
        "/setting/reset_pass",
        "/setting/lang_and_reg",
      ],
    },
    {
      name: "Install App",
      icon: <IconSquareArrowDownFilled className={IconClass} />,
      link: "/install",
      activeList: [
        "/install",
      ],
    },
    {
      name: "Logout",
      icon: <IconLogout className={IconClass} />,
      link: "/auth",
      activeList: [""],
    },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <Link to={"/"} className="flex justify-center border-b-2 py-8">
        <span className=" font-bold self-center text-4xl whitespace-nowrap">
          <span className="text-primary">Sale</span>sprit
        </span>
      </Link>
      <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItem.map((menuItem, i) => {
            return (
              <li key={i}>
                <Link
                    onClick={CloseMenu}
                  to={menuItem.link}
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    menuItem.activeList.includes(pathname) && "active"
                  }`}
                >
                  {menuItem.icon}
                  <span className="ms-3 font-semibold">{menuItem.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuItem;
