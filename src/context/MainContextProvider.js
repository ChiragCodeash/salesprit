import React from "react";
import HomeState from "./state/HomeState";
import ProductState from "./state/ProductState";
import CustomerState from "./state/CustomerState";
import MessageState from "./state/MessageState";
import SettingState from "./state/SettingState";
import GlobalState from "./state/GlobalState";
const MainContextProvider = ({ children }) => {
  return (
    <GlobalState>
      <SettingState>
        <HomeState>
          <CustomerState>
            <MessageState>
              <ProductState>{children}</ProductState>
            </MessageState>
          </CustomerState>
        </HomeState>
      </SettingState>
    </GlobalState>
  );
};

export default MainContextProvider;
