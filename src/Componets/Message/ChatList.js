import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/ContextState";

const SingalChatCard = ({ data, OpenChat  }) => {
  const { id, unread, desc, name, color } = data;
  return (
    <>
      <div className="py-5 flex  border-b cursor-pointer" onClick={()=>{OpenChat(data)}}>
        <div className="h-100 rounded-full" style={{ background: color }}>
          <h3 className="w-12 h-12 flex items-center justify-center text-light  font-semibold text-2xl">
            {name[0]}
          </h3>
        </div>
        <div>
          <div className={`mx-5 font-semibold text-xl `}>{name}</div>
          <div className="mx-5 font-medium text-sm text-gray-500 mt-2">
            {desc}
          </div>
        </div>
        <div className="ms-auto rounded-full  text-light  text-xs">
          <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-light bg-primary rounded-full">
            {unread}
          </span>
        </div>
      </div>
    </>
  );
};

const ChatList = () => {
  const {chatData , setActiveChat} = useContext(MessageContext)
  
  const navigate = useNavigate();

  const OpenChat = (data) => {
    const width = window.innerWidth;
    if (width <= 1024) {
      // setIsOpen(true);
      navigate("chatroom");
    }
    setActiveChat(data)
  };

  

  return (
    <>
      <div
        className="shadow-xl border-2 p-4 lg:p-8 rounded-lg overflow-auto xl:ch-85 ch-80"
        // style={{ height: "85vh" }}
      >
        <div className="">
          <h3 className="font-semibold text-xl text-gray-500">Group</h3>
          {chatData.map((item, i) => {
            return (
              item.type === "group" && (
                <SingalChatCard data={item} key={i} OpenChat={OpenChat}  />
              )
            );
          })}
        </div>
        <div className="my-7">
          <h3 className="font-semibold text-xl text-gray-500">Personal</h3>
          {chatData.map((item, i) => {
            return (
              item.type === "personal" && <SingalChatCard data={item} key={i} OpenChat={OpenChat} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatList;
