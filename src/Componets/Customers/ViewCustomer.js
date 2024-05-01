import React, { useContext, useState } from "react";
import Header from "../Common/Header";
import { IconCaretDownFilled, IconEdit } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../context/ContextState";
import { Dropdown } from "flowbite-react";

const ViewCustomer = () => {
  const { customerData, setFormData , setCustomerData } = useContext(CustomerContext);
  const navigate = useNavigate();
  const cols = ["Name", "orders", "spent($)", "gender", "Address", "Action"];

  const [selectedUser , setSelectedUser] = useState([])

  const onSelectUser = (userId , isChecked)=>{
    if (isChecked) {
      
      setSelectedUser([...selectedUser, userId]);
    } else {
     
      setSelectedUser(selectedUser.filter(id => id !== userId));
    }
  }
  
  const selectAll = (isChecked)=>{
  
    if(isChecked){
      setSelectedUser(customerData.map((item)=>item.id))
    }else{
      setSelectedUser([])
    }
  }
  const handleDelete = () => {
    setCustomerData((prevItems) => prevItems.filter((item) => !selectedUser.includes(item.id)));
    setSelectedUser([])
  };
  const OnEdit = (data) => {
    setFormData(data);
    navigate("edit");
  };


  return (
    <>
      <Header title={"Customer"} />
      <div
        className="relative overflow-x-auto shadow-xl sm:rounded-lg border mx-5 xl:ch-85 ch-80"
        // style={{height : "85vh"}}
      >
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase border-b ">
            <tr>
              <th
                scope="col"
                className="p-6 text-base text-gray-500 sticky top-0 bg-light"
              >
                <div className="flex items-center">
                  <div>
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      onChange={(e)=>{selectAll(e.target.checked)}}
                      checked={customerData.length ? selectedUser.length === customerData.length : false  }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                  {
                    Boolean(selectedUser.length) &&
                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => <IconCaretDownFilled className="cursor-pointer"/>}
                  >
                    <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
                  </Dropdown>
                  }
                </div>
              </th>
              {cols.map((item, i) => {
                return (
                  <th
                    scope="col"
                    className="p-6 text-base text-gray-500 sticky top-0 bg-light"
                    key={i}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {customerData.map(
              (
                {
                  cname,
                  orders,
                  spent,
                  gender,
                  phone,
                  Address,
                  id,
                  city,
                  pincode,
                  email,
                },
                i
              ) => {
                return (
                  <tr className="bg-white border-b" key={i}>
                    <td className="w-4 p-6">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onChange={(e)=>{onSelectUser(id , e.target.checked)}}
                          checked={selectedUser.includes("all") || selectedUser.includes(id)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="p-6 text-base font-semibold">{cname}</td>
                    <td className="p-6 text-base font-semibold">{orders}</td>
                    <td className="p-6 text-base font-semibold text-primary">
                      ${spent.toFixed(2)}
                    </td>
                    <td className="p-6 text-base font-semibold">{gender}</td>
                    <td className="p-6 text-base font-semibold">{Address}</td>
                    <td className="p-6 text-base font-semibold text-success">
                      {" "}
                      <div
                        className=" cursor-pointer font-semibold text-md text-success flex items-center "
                        onClick={() => {
                          OnEdit({
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
                          });
                        }}
                      >
                        <IconEdit className="me-1" />
                        <span>Edit</span>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        {
          customerData.length ? (
            ""
          ) : (
          <div className="mt-2 text-center font-semibold text-xl text-gray-500">NO Data</div>
          )
        }
      </div>
    </>
  );
};

export default ViewCustomer;
