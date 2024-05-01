import { IconBellRinging2Filled, IconX } from "@tabler/icons-react";
import moment from "moment";
import React from "react";

const NotificationCard = ({ data ,DeleteNotification}) => {
  const { id, notification, isRead, time } = data;
  return (
    <>
      <div id={id}>
        <div
          id="alert-1"
          className=" px-4 py-8 lg:p-8 flex  rounded-lg border"
          role="alert"
        >
          <div className="h-100 bg-primary rounded-full">
            <IconBellRinging2Filled
              height={50}
              width={50}
              className="p-2.5 text-light"
            />
          </div>
          <div>
            <div className={`mx-5 text-md font-medium  ${!isRead && "text-gray-600"}`}>{notification}</div>
            <div className="mx-5 font-semibold text-sm text-gray-600 mt-3">
              {moment(time).from(moment())}
            </div>
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5  rounded-lg  p-1.5  inline-flex items-center justify-center h-8 w-8 "
            onClick={()=>{DeleteNotification(id)}}
          >
            <IconX />
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
