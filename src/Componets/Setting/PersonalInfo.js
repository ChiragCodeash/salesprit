import React, { useContext, useEffect, useState } from "react";
import SettingHeader from "./SettingHeader";
import { SettingContext } from "../../context/ContextState";

const PersonalInfo = () => {
  const { profileData, setProfileData } = useContext(SettingContext);
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;

  const [formData, setFormData] = useState({
    ...profileData
  });

  const [isValidate , setValidate] = useState(false)

  useEffect(()=>{
    for (const [key, value] of Object.entries(formData)) {
      if(!value){
        setValidate(true)
        break;
      }else{
        setValidate(false)
      }
    }
  },[formData])

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...profileData, [name]: value });
    
  };

  const SaveChange = ()=>{
    
    setProfileData({...formData})
  }
  return (
    <div className="">
      <SettingHeader
        title={"Personal Information"}
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
              value={formData.fname}
              className={inputClasses}
              placeholder="Chirag"
              onChange={handleForm}
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
              value={formData.lname}
              className={inputClasses}
              placeholder="Patel"
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email :
            </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              className={inputClasses}
              placeholder="email@gmail.com"
              onChange={handleForm}
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
              value={formData.phone}
              className={inputClasses}
              placeholder="11223 34455"
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="dob" className={labelClasses}>
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              className={inputClasses}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="position" className={labelClasses}>
              Position :
            </label>
            <select
              type="text"
              id="postion"
              name="position"
              defaultValue={formData.position}
              className={inputClasses}
              onChange={handleForm}
            >
              <option value={"manager"}>Manager</option>
              <option value={"Head Cashier"}>Head Cashier</option>
              <option value={"waiter"}>Waiter</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-100">
        <button disabled={isValidate}  onClick={SaveChange} className="bg-dark disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium mb-20 px-14 py-3.5 rounded-lg text-center text-light text-sm text-white w-100">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
