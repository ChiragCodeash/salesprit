import React, { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../context/ContextState";
import { Button } from "react-scroll";

const EditCustomer = () => {
  const { formData, setFormData, UpdateCustomer } = useContext(CustomerContext);
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-base font-semibold text-gray-900 dark:text-white`;
  const [isValidate, setValidate] = useState(false);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  useEffect(() => {
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "img") {
        if (!value) {
          setValidate(true);
          break;
        } else {
          setValidate(false);
        }
      }
    }
  }, [formData ]);
  return (
    <>
      <Header title={"Edit Customer"} />
      <div className="mx-5">
        <div className="shadow-xl border rounded-lg">
          <div className="p-5">
            <Link
              to={"/customers"}
              className="text-primary text-lg font-bold cursor-pointer "
            >
              Back
            </Link>
          </div>
          <div className="p-5">
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label htmlFor="cname" className={labelClasses}>
                  Full Name :
                </label>
                <input
                  type="text"
                  id="cname"
                  name="cname"
                  value={formData.cname}
                  className={inputClasses}
                  placeholder="Sarah Moanees"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label htmlFor="gender" className={labelClasses}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  defaultValue={formData.gender}
                  onChange={handleFormChange}
                  className={inputClasses}
                >
                  <option defaultValue={""}>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className={labelClasses}>
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  name="city"
                  className={inputClasses}
                  placeholder="United States"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  onChange={handleFormChange}
                  name="phone"
                  value={formData.phone}
                  className={inputClasses}
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address:
                </label>
                <input
                  type="url"
                  id="email"
                  value={formData.email}
                  name="email"
                  onChange={handleFormChange}
                  className={inputClasses}
                  placeholder="sarah259@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="pincode" className={labelClasses}>
                  Pincode :
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleFormChange}
                  name="pincode"
                  className={inputClasses}
                  placeholder="333322"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="address" className={labelClasses}>
                Address
              </label>
              <textarea
                type="text"
                rows={8}
                id="address"
                value={formData.Address}
                name="Address"
                onChange={handleFormChange}
                className={inputClasses}
                placeholder="2603 Jadewood Drive"
              />
            </div>

            <div className="flex justify-center">
              <Button
                onClick={UpdateCustomer}
                disabled={isValidate}
                className=" bg-dark text-light text-center  font-medium rounded-lg text-sm py-3 px-10 me-2 mb-2  disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCustomer;
