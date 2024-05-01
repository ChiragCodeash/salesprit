import React from "react";
import { MessageContext } from "../ContextState";
import { useState } from "react";

const MessageState = ({ children }) => {
  const [chatData, setChatData] = useState([
    {
      id: 1,
      name: "Gannon Norman",
      desc: "Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus,",
      unread: 2,
      type: "personal",
      color: "#dd4744",
      message: [
        {
          id: 1,
          message:
            "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas",
          time: "4:49 AM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec",
          time: "12:01 PM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent",
          time: "11:00 PM",
          type: "send",
        },
        {
          id: 4,
          message:
            "neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
          time: "9:02 AM",
          type: "receive",
        },
        {
          id: 5,
          message: "id, blandit at, nisi. Cum sociis natoque penatibus et",
          time: "6:43 PM",
          type: "send",
        },
      ],
    },
    {
      id: 2,
      name: "Bradley Deleon",
      desc: "molestie in, tempus eu, ligula. Aenean euismod mauris eu elit.",
      unread: 10,
      type: "group",
      color: "#82d35d",
      message: [
        {
          id: 1,
          message:
            "ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
          time: "7:53 PM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna",
          time: "10:31 AM",
          type: "send",
        },
        {
          id: 3,
          message:
            "erat. Sed nunc est, mollis non, cursus non, egestas a, dui.",
          time: "1:09 PM",
          type: "send",
        },
        {
          id: 4,
          message:
            "Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique",
          time: "8:18 PM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
          time: "7:03 AM",
          type: "send",
        },
      ],
    },
    {
      id: 3,
      name: "Cade Cardenas",
      desc: "turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut,",
      unread: 7,
      type: "group",
      color: "#7ce26f",
      message: [
        {
          id: 1,
          message:
            "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed,",
          time: "2:45 AM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et",
          time: "7:40 AM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
          time: "10:10 AM",
          type: "receive",
        },
        {
          id: 4,
          message:
            "ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",
          time: "6:22 AM",
          type: "receive",
        },
        {
          id: 5,
          message: "enim non nisi. Aenean eget metus. In nec orci. Donec",
          time: "7:05 AM",
          type: "receive",
        },
      ],
    },
    {
      id: 4,
      name: "Lucius Taylor",
      desc: "tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat.",
      unread: 5,
      type: "personal",
      color: "#1d64a3",
      message: [
        {
          id: 1,
          message:
            "et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero.",
          time: "3:03 AM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis",
          time: "9:51 AM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,",
          time: "11:05 AM",
          type: "send",
        },
        {
          id: 4,
          message:
            "interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae",
          time: "2:02 AM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris",
          time: "6:10 AM",
          type: "receive",
        },
      ],
    },
    {
      id: 5,
      name: "Sylvester Park",
      desc: "Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,",
      unread: 1,
      type: "group",
      color: "#e2c834",
      message: [
        {
          id: 1,
          message:
            "eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla",
          time: "5:57 PM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem",
          time: "10:22 AM",
          type: "send",
        },
        {
          id: 3,
          message: "posuere, enim nisl elementum",
          time: "6:08 AM",
          type: "receive",
        },
        {
          id: 4,
          message: "mi felis, adipiscing fringilla,",
          time: "12:09 PM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat,",
          time: "4:52 AM",
          type: "receive",
        },
      ],
    },
    {
      id: 6,
      name: "Justin Levine",
      desc: "tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet,",
      unread: 12,
      type: "group",
      color: "#f17cf9",
      message: [
        {
          id: 1,
          message:
            "ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel,",
          time: "2:18 AM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque.",
          time: "8:04 PM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus.",
          time: "8:56 PM",
          type: "receive",
        },
        {
          id: 4,
          message:
            "ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare,",
          time: "8:00 AM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla",
          time: "3:17 AM",
          type: "receive",
        },
      ],
    },
    {
      id: 7,
      name: "Edward Benjamin",
      desc: "consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim",
      unread: 2,
      type: "group",
      color: "#048091",
      message: [
        {
          id: 1,
          message:
            "dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in",
          time: "10:30 AM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc",
          time: "8:54 PM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor",
          time: "4:16 AM",
          type: "send",
        },
        {
          id: 4,
          message: "lectus sit amet",
          time: "7:16 PM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus",
          time: "3:11 PM",
          type: "receive",
        },
      ],
    },
    {
      id: 8,
      name: "Marvin Mccall",
      desc: "nisi nibh lacinia orci, consectetuer euismod est arcu ac orci.",
      unread: 6,
      type: "personal",
      color: "#c40b96",
      message: [
        {
          id: 1,
          message:
            "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
          time: "9:58 PM",
          type: "send",
        },
        {
          id: 2,
          message: "dapibus gravida. Aliquam tincidunt, nunc ac mattis",
          time: "7:18 AM",
          type: "receive",
        },
        {
          id: 3,
          message:
            "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas",
          time: "5:30 AM",
          type: "receive",
        },
        {
          id: 4,
          message:
            "tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et",
          time: "1:49 AM",
          type: "send",
        },
        {
          id: 5,
          message:
            "hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
          time: "6:13 AM",
          type: "receive",
        },
      ],
    },
    {
      id: 9,
      name: "Bruce Hewitt",
      desc: "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
      unread: 8,
      type: "personal",
      color: "#4a8ad3",
      message: [
        {
          id: 1,
          message:
            "nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
          time: "10:10 AM",
          type: "receive",
        },
        {
          id: 2,
          message: "dictum augue",
          time: "11:49 AM",
          type: "receive",
        },
        {
          id: 3,
          message: "gravida",
          time: "8:13 AM",
          type: "send",
        },
        {
          id: 4,
          message:
            "sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis",
          time: "7:28 PM",
          type: "receive",
        },
        {
          id: 5,
          message:
            "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In",
          time: "2:40 PM",
          type: "receive",
        },
      ],
    },
    {
      id: 10,
      name: "David Pruitt",
      desc: "vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
      unread: 8,
      type: "personal",
      color: "#6af26c",
      message: [
        {
          id: 1,
          message:
            "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque",
          time: "1:00 PM",
          type: "receive",
        },
        {
          id: 2,
          message:
            "Curae Donec tincidunt. Donec vitae erat vel pede blandit congue.",
          time: "1:25 PM",
          type: "send",
        },
        {
          id: 3,
          message:
            "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue",
          time: "9:11 AM",
          type: "receive",
        },
        {
          id: 4,
          message:
            "litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam",
          time: "12:01 PM",
          type: "send",
        },
        {
          id: 5,
          message: "amet risus. Donec egestas.",
          time: "5:54 PM",
          type: "receive",
        },
      ],
    },
  ]);

  const [activeChat, setActiveChat] = useState(chatData[0]);
  const DefaultObj = {
    chatData,
    activeChat,
    setActiveChat,
  };
  return (
    <MessageContext.Provider value={DefaultObj}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageState;
