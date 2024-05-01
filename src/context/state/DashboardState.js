import React from "react";
import { DashboardContext } from "../ContextState";

const DashboardState = ({ children }) => {
  const DefaultObj = {
    name: "chirag",
  };
  return (
    <DashboardContext.Provider value={DefaultObj}>{children}</DashboardContext.Provider>
  );
};

export default DashboardState;
