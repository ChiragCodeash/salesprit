import React, { useState } from "react";
import { DashboardContext, GlobalContext } from "../ContextState";

const GlobalState = ({ children }) => {
const [cartDrawer , setCartDrawer] = useState(false);
const [menuDrawer , setMenuDrawer] = useState(false);

const CloseCart = ()=>{
    setCartDrawer(false)
}
const OpenCart = ()=>{
    setCartDrawer(true)
    // document.body.style.overflow = cartDrawer ? 'auto' : 'hidden';
}

const CloseMenu = ()=>{
    setMenuDrawer(false)
}
const OpenMenu = ()=>{
    setMenuDrawer(true)
    // document.body.style.overflow = menuDrawer ? 'auto' : 'hidden';
}
  const DefaultObj = {
    CloseCart,OpenCart, cartDrawer ,CloseMenu , OpenMenu , menuDrawer
  };
  return (
    <GlobalContext.Provider value={DefaultObj}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
