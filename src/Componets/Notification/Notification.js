import React, { useState } from "react";
import Header from "../Common/Header";
import NotificationCard from "./NotificationCard";
import $ from "jquery";

const Notification = () => {
  const [notification, setNotificationData] = useState([
    {
      id: 1,
      notification:
        "ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi.",
      isRead: false,
      time: "2024-04-14 21:44:55",
    },
    {
      id: 2,
      notification:
        "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id",
      isRead: false,
      time: "2024-04-19 15:54:03",
    },
    {
      id: 3,
      notification:
        "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque",
      isRead: false,
      time: "2024-04-19 07:49:48",
    },
    {
      id: 4,
      notification:
        "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt",
      isRead: false,
      time: "2024-04-11 02:24:05",
    },
    {
      id: 5,
      notification:
        "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non",
      isRead: false,
      time: "2024-04-04 16:02:55",
    },
    {
      id: 6,
      notification:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit",
      isRead: true,
      time: "2024-04-06 04:53:01",
    },
    {
      id: 7,
      notification:
        "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa.",
      isRead: true,
      time: "2024-04-10 23:58:49",
    },
    {
      id: 8,
      notification:
        "accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum",
      isRead: true,
      time: "2024-04-05 15:37:00",
    },
    {
      id: 9,
      notification:
        "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque",
      isRead: true,
      time: "2024-04-13 06:57:54",
    },
    {
      id: 10,
      notification:
        "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus",
      isRead: false,
      time: "2024-04-21 07:02:52",
    },
  ]);

  const DeleteNotification = (id) => {
    // $(`#${id}`).remove()
    setNotificationData((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header
        title={"Notification"}
        CustomeHeader={
          <div className="text-lg font-semibold text-primary cursor-pointer">
            Mark All As Read
          </div>
        }
      />
      <div
        className="mx-5 shadow-xl rounded-md overflow-auto xl:ch-85 ch-80"
        // style={{height : "85vh"}}
      >
        {notification.map((item, i) => {
          return (
            <NotificationCard
              data={item}
              key={i}
              DeleteNotification={DeleteNotification}
            />
          );
        })}

        {
          !notification.length ? (<div className="text-center text-gray-500 font-semibold text-xl  mt-4">No Notification</div>) : "" 
        }
      </div>
    </>
  );
};

export default Notification;
