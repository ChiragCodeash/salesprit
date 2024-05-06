import React, { useEffect, useState } from "react";
import { DashboardContext, GlobalContext } from "../ContextState";

const GlobalState = ({ children }) => {
const [cartDrawer , setCartDrawer] = useState(false);
const [menuDrawer , setMenuDrawer] = useState(false);

const CloseCart = ()=>{
    setCartDrawer(false)
}
const OpenCart = ()=>{
    setCartDrawer(true)
}

const CloseMenu = ()=>{
    setMenuDrawer(false)
}
const OpenMenu = ()=>{
    setMenuDrawer(true)
}

const [showInstallPrompt, setShowInstallPrompt] = useState(false);
const [deferredPrompt, setDeferredPrompt] = useState(null);

useEffect(() => {
const handleBeforeInstallPrompt = (event) => {
    console.log("run");
    event.preventDefault();
    setShowInstallPrompt(true);
    setDeferredPrompt(event);
  };
  
  window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

  return () => {
    window.removeEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );
  };
},[]);

const handleInstallClick = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        // console.log("User accepted the install prompt");
        window.location.reload();
      } else {
        // console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
    });
  }
};
  const DefaultObj = {
    CloseCart,OpenCart, cartDrawer ,CloseMenu , OpenMenu , menuDrawer , showInstallPrompt , handleInstallClick
  };
  return (
    <GlobalContext.Provider value={DefaultObj}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
