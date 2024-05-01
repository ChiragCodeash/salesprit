import React from "react";

const ChatBubble = ({ data }) => {
  const { id, name, message, time, type , color } = data;

  if (type === "send") {
    return (
      <>
        <div className="mx-5 my-5">
          <div className="flex items-start gap-2.5 justify-end">
            <div className="bg-dark   flex flex-col leading-1.5 max-w-xl p-4 rounded-l-3xl rounded-tr-3xl text-light w-full">
              <p className="text-md font-normal py-2.5 text-light ">
               {message}
              </p>
              <span className="text-sm font-semibold text-end">{time}</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mx-5 my-5">
          <div className="flex items-start gap-2.5">
            <div className="h-100 rounded-full" style={{ background: color }}>
              <h3 className="w-10 h-10 flex items-center justify-center text-light  font-semibold text-xl" >
                {name}
              </h3>
            </div>
            <div className="flex flex-col w-full max-w-xl leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-3xl rounded-es-3xl">
              <p className="text-md font-normal py-2.5 text-black">
                {message}
              </p>
              <span className="text-sm font-semibold text-end text-gray-500">
                {time}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ChatBubble;
