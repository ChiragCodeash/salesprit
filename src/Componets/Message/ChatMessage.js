import {
  IconBarcode,
  IconMoodSmileFilled,
  IconPhoneFilled,
  IconSend2,
  IconVideo,
} from "@tabler/icons-react";
import React, { useContext, useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import { MessageContext } from "../../context/ContextState";

const ChatMessage = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState();
  const { activeChat, setActiveChat } = useContext(MessageContext);
  const { name, message, color } = activeChat;
  useEffect(() => {
    const width = window.innerWidth;
    if (width > 768) {
      navigate("/message");
    }
  }, []);

  const OnSend = () => {
    if(msg){
      setActiveChat({
        ...activeChat,
        message: [
          ...message,
          { message: msg, time: "12:22 PM", type: "send", id: Date.now() },
        ],
      });
      setMsg()
    }
  };

  return (
    <>
      {/* <Header title={"Room"}/> */}
      <div className="" style={{ height: "85vh" }}>
        <div className="mx-5">
          <div className="py-5 flex items-center border-b">
            <div className="h-100 rounded-full" style={{ background: color }}>
              <h3 className="w-12 h-12 flex items-center justify-center text-light  font-semibold text-2xl">
                {name[0]}
              </h3>
            </div>
            <div>
              <div className={`mx-5 font-semibold text-xl `}>{name}</div>
            </div>
            <div className="ms-auto rounded-full flex gap-4 text-light  text-xs">
              <div className="bg-success h-12 rounded-full w-12 flex justify-center items-center">
                <IconPhoneFilled />
              </div>
              <div className="bg-primary h-12 rounded-full w-12 flex justify-center items-center">
                <IconVideo />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center font-semibold text-gray-500">
          Today
        </div>

        <div
          className=" overflow-auto mb-2 lg:ch-77 ch-73 tab:ch-76"
          // style={{ height: "77vh" }}
        >
          {message.map((item, i) => {
            return (
              <ChatBubble data={{ ...item, name: name[0], color }} key={i} />
            );
          })}
        </div>

        <div className="">
          <div className="w-full">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            ></label>
            <div className="flex relative mx-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IconMoodSmileFilled className="text-primary" />
              </div>
              <input
                type="search"
                name="msg"
                value={msg || ""}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full   focus:ring-orange-400 focus:border-orange-400 "
                placeholder="Write Message"
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={OnSend}
                className="text-primary absolute flex justify-center items-center  end-2.5 bg-primary bottom-2 font-medium rounded-full text-sm w-10 h-10"
                style={{ bottom: "7px", right: "7px" }}
              >
                <IconSend2 className="text-light" height={25} width={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
