import React, { useContext, useEffect, useState } from "react";
import SettingHeader from "./SettingHeader";
import { IconCaretDownFilled, IconEdit } from "@tabler/icons-react";
import { SettingContext } from "../../context/ContextState";
import { Dropdown } from "flowbite-react";

const CustomeButton = ({ onAddEmp }) => {
  return (
    <button
      className="text-white bg-dark text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 focus:outline-none "
      onClick={onAddEmp}
    >
      + Add Employee
    </button>
  );
};

const CustomeForm = ({ onSubmit, title  }) => {
 
  const {  empData , setEmpData } = useContext(SettingContext);
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;

  const [isValidate , setValidate] = useState(false)

  useEffect(()=>{
    for (const [key, value] of Object.entries(empData)) {
      if(!value){
        setValidate(true)
        break;
      }else{
        setValidate(false)
      }
    }
  },[empData])

  const handleChange = (e)=>{
    const{name , value } = e.target
    setEmpData({...empData , [name] : value})
  }
  
  return (
    <>
      <SettingHeader
        title={title}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remad aperiam eaque ipsa quae ab illo inventore"
        }
      />
      <div className="py-10">
        <div className="grid gap-9 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="fname" className={labelClasses}>
              First Name :
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={empData.fname}
              className={inputClasses}
              placeholder="Chirag"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lname" className={labelClasses}>
              Last Name :
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={empData.lname}
              className={inputClasses}
              placeholder="Patel"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={empData.email}
              className={inputClasses}
              placeholder="email@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number :
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={empData.phone}
              className={inputClasses}
              placeholder="11223 34455"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className={labelClasses}>
              Gender
            </label>
            <select
              type="url"
              id="gender"
              name="gender"
              value={empData.gender}
              className={inputClasses}
              onChange={handleChange}
            >
              <option value={""}>Choose Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="position" className={labelClasses}>
              Role :
            </label>
            <select
              type="text"
              id="postion"
              name="role"
              defaultValue={empData.role}
              className={inputClasses}
              placeholder="Head Cashier"
              onChange={handleChange}
            >
              <option value={""}>Choose Role</option>
              <option value={"Waiter"}>Waiter</option>
              <option value={"Cashier"}>Cashier</option>
              <option value={"Manager"}>Manager</option>
              </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-100">
        <button
          onClick={onSubmit}
          disabled={isValidate}
          className="text-white disabled:cursor-not-allowed disabled:opacity-50 bg-dark w-100 mx-20 text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14  py-3.5   focus:outline-none "
        >
          Save Change
        </button>
      </div>
    </>
  );
};

const EmpManage = () => {
  const { empDataList , setEmpData  , empData , UpdateEmp,setEmpDataList , AddEmp} = useContext(SettingContext);
  const [opration, setOpration] = useState("view");
  const cols = [
   
    "Name",
    "Emplyoee ID",
    "Action",
  ];

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
      setSelectedUser(empDataList.map((item)=>item.id))
    }else{
      setSelectedUser([])
    }
  }
  const handleDelete = () => {
    setEmpDataList((prevItems) => prevItems.filter((item) => !selectedUser.includes(item.id)));
    setSelectedUser([])
  };

  const onAddEmp = () => {
    setOpration("add");
  };
 
  const OnUpdateSubmit = ()=>{
     UpdateEmp();
    setOpration("view");
  }
  const OnAddSubmit = ()=>{
    AddEmp();
    setOpration("view");
  }

  const OnEdit = (data)=>{
    setOpration("update");
    setEmpData(data)
  }

  if (opration === "view") {
    return (
      <>
        <SettingHeader
          title={"Employees"}
          customeHeader={<CustomeButton onAddEmp={onAddEmp} />}
        />
        <div className="overflow-auto shadow-xl border-2 rounded-lg mt-3 xl:ch-76 ch-77  ">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase border-b ">
              <tr>
              <th
                      scope="col"
                      className="p-6 text-base text-gray-500 sticky top-0 bg-light"
                    
                    >
                    <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      onChange={(e)=>{selectAll(e.target.checked)}}
                      checked={empDataList.length ? selectedUser.length === empDataList.length : false  }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
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
              {empDataList.map((item, i) => {
                return (
                  <tr className="bg-white border-b" key={i}>
                    <td className="w-4 p-6">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onChange={(e)=>{onSelectUser(item.id , e.target.checked)}}
                          checked={ selectedUser.includes(item.id)}
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
                    <td className="p-6 text-base font-semibold">
                      {item.fname} {item.lname}
                    </td>
                    <td className="p-6 text-base font-semibold">#{item.emp_id}</td>
                    <td className="p-6 text-base font-semibold text-success">
                      {" "}
                      <div
                        className=" cursor-pointer font-semibold text-md text-success flex items-center "
                        onClick={()=>{OnEdit(item)}}
                      >
                        <IconEdit className="me-1" />
                        <span>Edit</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {
          empDataList.length ? (
            ""
          ) : (
          <div className="mt-2 text-center font-semibold text-xl text-gray-500">NO Data</div>
          )
        }
        </div>
      </>
    );
  } else if(opration === "update") {
    return <CustomeForm onSubmit={OnUpdateSubmit} title={"Update Employees"} />;
  }else{
    return <CustomeForm  onSubmit={OnAddSubmit}  title={"Add New Employees"} />;

  }
};

export default EmpManage;
