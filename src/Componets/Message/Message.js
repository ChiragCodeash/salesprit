import React from "react";
import Header from "../Common/Header";
import ChatList from "./ChatList";
import ChatMessage from "./ChatMessage";

const Message = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mx-5">
        <div className="col-span-12 md:col-span-5 ">
          <Header title={"Message"} />
          <ChatList />
        </div>
        <div className="col-span-12 md:col-span-7 hidden lg:block md:hidden sm:hidden">
          <ChatMessage />
        </div>
      </div>
    </>
  );
};

export default Message;
