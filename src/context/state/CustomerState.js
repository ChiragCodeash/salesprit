import React, { useState } from "react";
import { CustomerContext } from "../ContextState";
import { useNavigate } from "react-router-dom";

const CustomerState = ({ children }) => {
    const navigate = useNavigate()
  const [customerData, setCustomerData] = useState([
    {
      id: 1,
      cname: "Todd Nash",
      orders: 16,
      spent: 952,
      rating: 5,
      gender: "Male",
      Address: "3819 Sit Road",
      pincode: "546524",
      city: "Pasir Ris",
      email: "risus.duis@yahoo.edu",
      phone: "1-267-538-2588",
    },
    {
      id: 2,
      cname: "Hayden Cleveland",
      orders: 53,
      spent: 447,
      rating: 5,
      gender: "Female",
      Address: "310-4221 Massa. Rd.",
      pincode: "586725",
      city: "Luton",
      email: "et.magnis@aol.edu",
      phone: "(822) 394-3664",
    },
    {
      id: 3,
      cname: "Kermit Hines",
      orders: 63,
      spent: 710,
      rating: 2,
      gender: "Female",
      Address: "Ap #751-6144 Diam Road",
      pincode: "114591",
      city: "Marawi",
      email: "pellentesque.ut.ipsum@google.org",
      phone: "1-537-640-8818",
    },
    {
      id: 4,
      cname: "Chastity Pacheco",
      orders: 64,
      spent: 428,
      rating: 1,
      gender: "Female",
      Address: "Ap #801-6104 Condimentum Rd.",
      pincode: "418713",
      city: "Nampa",
      email: "pede.cras@hotmail.com",
      phone: "(426) 227-5037",
    },
    {
      id: 5,
      cname: "August Mcleod",
      orders: 70,
      spent: 150,
      rating: 3,
      gender: "Male",
      Address: "991-5999 Venenatis St.",
      pincode: "49206",
      city: "Cuernavaca",
      email: "eu.augue@protonmail.ca",
      phone: "(662) 227-3157",
    },
    {
      id: 6,
      cname: "Colette Pickett",
      orders: 27,
      spent: 715,
      rating: 5,
      gender: "Male",
      Address: "651-1331 Facilisis. Street",
      pincode: "8782",
      city: "Camponogara",
      email: "ligula.consectetuer@aol.ca",
      phone: "(495) 527-5828",
    },
    {
      id: 7,
      cname: "Garrison Mckenzie",
      orders: 12,
      spent: 529,
      rating: 4,
      gender: "Male",
      Address: "Ap #179-8637 Luctus Road",
      pincode: "U5 8IP",
      city: "Mazatlán",
      email: "sed.pede.nec@google.net",
      phone: "(645) 314-8275",
    },
    {
      id: 8,
      cname: "Francis Hart",
      orders: 68,
      spent: 330,
      rating: 2,
      gender: "Male",
      Address: "1283 Scelerisque Rd.",
      pincode: "460947",
      city: "Feira de Santana",
      email: "justo.sit@icloud.couk",
      phone: "(813) 687-4124",
    },
    {
      id: 9,
      cname: "Uriel Frederick",
      orders: 66,
      spent: 217,
      rating: 2,
      gender: "Male",
      Address: "655-6831 Arcu. Rd.",
      pincode: "46158",
      city: "Cañas",
      email: "nonummy@hotmail.ca",
      phone: "(338) 788-3296",
    },
    {
      id: 10,
      cname: "Kieran Sosa",
      orders: 71,
      spent: 199,
      rating: 3,
      gender: "Female",
      Address: "7380 Arcu Avenue",
      pincode: "786737",
      city: "Timaru",
      email: "luctus.vulputate@yahoo.com",
      phone: "(121) 911-7172",
    },
    {
      id: 11,
      cname: "Jolie Barber",
      orders: 82,
      spent: 100,
      rating: 2,
      gender: "Female",
      Address: "191-6693 Nunc St.",
      pincode: "83232",
      city: "Starachowice",
      email: "vivamus.sit@aol.edu",
      phone: "1-738-584-0185",
    },
    {
      id: 12,
      cname: "Marvin Holt",
      orders: 14,
      spent: 883,
      rating: 2,
      gender: "Male",
      Address: "3950 Varius Av.",
      pincode: "87-16",
      city: "Sukabumi",
      email: "non.quam@hotmail.net",
      phone: "(566) 513-5889",
    },
    {
      id: 13,
      cname: "Amery Dejesus",
      orders: 95,
      spent: 861,
      rating: 1,
      gender: "Female",
      Address: "942-6570 Auctor, Rd.",
      pincode: "FH3J 4NB",
      city: "Mamuju",
      email: "pharetra.felis@aol.com",
      phone: "1-786-521-9758",
    },
    {
      id: 14,
      cname: "Shannon Ramsey",
      orders: 28,
      spent: 901,
      rating: 4,
      gender: "Male",
      Address: "914-5995 Eu Street",
      pincode: "17634",
      city: "Drammen",
      email: "non.hendrerit@icloud.edu",
      phone: "(363) 732-4792",
    },
    {
      id: 15,
      cname: "Isabella Adams",
      orders: 36,
      spent: 773,
      rating: 2,
      gender: "Male",
      Address: "P.O. Box 506, 4064 Quisque Rd.",
      pincode: "36666",
      city: "Sicuani",
      email: "id.ante.dictum@outlook.org",
      phone: "(988) 140-3155",
    },
  ]);

  const [formData, setFormData] = useState({
    cname: "",
    email: "",
    gender: "",
    city: "",
    phone: "",
    pincode: "",
    Address: "",
  });

  const UpdateCustomer = () => {
    const {
      cname,
      orders,
      spent,
      gender,
      Address,
      id,
      city,
      pincode,
      email,
      phone,
    } = formData;
    setCustomerData((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            cname,
            orders,
            spent: Number(spent),
            gender,
            Address,
            id,
            city,
            pincode,
            email,
            phone,
          }; 
        }
        return item;
      });
    });
    setFormData({
      cname: "",
      email: "",
      gender: "",
      city: "",
      phone: "",
      pincode: "",
      Address: "",
    });
    navigate("/customers")
  };

  const DefaultObj = {
    customerData,
    setCustomerData,
    formData,
    setFormData,UpdateCustomer
  };
  return (
    <CustomerContext.Provider value={DefaultObj}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerState;
