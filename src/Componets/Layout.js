import React, { useContext, useState } from "react";
import Sidebar from "./Common/Sidebar";
import Cart from "./Home/Cart";
import InstallPrompt from "./Common/InstallPrompt";
import { Button, Drawer } from "flowbite-react";
import { GlobalContext } from "../context/ContextState";
import MenuItem from "./Common/MenuItem";

const Layout = ({ Componets, title }) => {
  const { CloseCart, OpenCart, cartDrawer, CloseMenu, OpenMenu, menuDrawer } =
    useContext(GlobalContext);

  
  document.title = `SaleSprit | ${title}`;

  return (
    <>
      <InstallPrompt />
      <Sidebar handleOpen={OpenCart} OpenMenu={OpenMenu} />
      <div className="md:ml-64">
        <div className="">
          <Componets />
        </div>
      </div>

      <Drawer   className="w-full" open={cartDrawer} onClose={CloseCart}>
        <Drawer.Header titleIcon={() => <></>} />
        <Drawer.Items>
          <Cart />
        </Drawer.Items>
      </Drawer>

      <Drawer open={menuDrawer} className="p-0" onClose={CloseMenu}>
       
        <Drawer.Items>
          <MenuItem/>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Layout;
