import React, { useState } from "react";
import { SettingContext } from "../ContextState";

const SettingState = ({ children }) => {
  const [profileData, setProfileData] = useState({
    fname: "Chirag",
    lname: "Patel",
    email: "chirag@gmail.com",
    phone: "1234567890",
    dob: "2002-12-31",
    position: "Head Cashier",
    img: "/assets/images/user/user-1.png",
    password: "Admin@123",
  });

  const [empDataList, setEmpDataList] = useState([
    {
      id: 1,
      fname: "Honorato",
      lname: "Rosario",
      phone: "(738) 882-8181",
      email: "id.erat@hotmail.edu",
      gender: "Female",
      role: "Head",
      emp_id: 16179,
    },
    {
      id: 2,
      fname: "Len",
      lname: "Gill",
      phone: "(507) 424-2729",
      email: "nec@yahoo.couk",
      gender: "Female",
      role: "Head",
      emp_id: 23878,
    },
    {
      id: 3,
      fname: "Flynn",
      lname: "Holmes",
      phone: "1-555-787-7713",
      email: "egestas.a@yahoo.org",
      gender: "Male",
      role: "Head",
      emp_id: 86465,
    },
    {
      id: 4,
      fname: "Camden",
      lname: "Vaughn",
      phone: "1-548-225-8687",
      email: "egestas.nunc@yahoo.com",
      gender: "Female",
      role: "Waiter",
      emp_id: 35417,
    },
    {
      id: 5,
      fname: "Kareem",
      lname: "Ford",
      phone: "(874) 875-2366",
      email: "non.bibendum@icloud.net",
      gender: "Male",
      role: "Waiter",
      emp_id: 94336,
    },
  ]);

  const [empData, setEmpData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    gender: "",
    role: "",
  });

  const UpdateEmp = () => {
    const { id } = empData;
    setEmpDataList((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item,...empData}; // Update only the specified properties
        }
        return item;
      });
    });
    setEmpData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        gender: "",
        role: "",
      });
  };

  const AddEmp = ()=>{
    setEmpDataList([...empDataList, { ...empData , id:Date.now() , emp_id : (Math.random() * 100000).toFixed(0) }])
    setEmpData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        gender: "",
        role: "",
      });
  }

  const DefaultObj = {
    profileData,
    setProfileData,
    empData,
    setEmpData,
    empDataList,
    UpdateEmp,setEmpData,AddEmp,setEmpDataList
  };
  return (
    <SettingContext.Provider value={DefaultObj}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingState;
