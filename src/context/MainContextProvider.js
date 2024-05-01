import React from "react";
import HomeState from "./state/HomeState";
import ProductState from "./state/ProductState";
import CustomerState from "./state/CustomerState";
import MessageState from "./state/MessageState";
import SettingState from "./state/SettingState";
const MainContextProvider = ({ children }) => {
  return (
    <SettingState>
    <HomeState>
      <CustomerState>
        <MessageState>
          <ProductState>{children}</ProductState>;
        </MessageState>
      </CustomerState>
    </HomeState>
    </SettingState>
  );
};

export default MainContextProvider;
