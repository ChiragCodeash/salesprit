import React from "react";
import SettingHeader from "./SettingHeader";

const ResetPass = () => {
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;
  return (
    <div className="ch-85 overflow-auto">
      <SettingHeader
        title={"Login & Password"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remad aperiam eaque ipsa quae ab illo inventore"
        }
      />

      <div className="py-10">
        <div className="grid gap-11 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="uname" className={labelClasses}>
              Username :
            </label>
            <input
              type="text"
              id="uname"
              className={inputClasses}
              placeholder="Chirag"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number :
            </label>
            <input
              type="text"
              id="phone"
              className={inputClasses}
              placeholder="11223 34455"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address :
            </label>
            <input
              type="text"
              id="email"
              className={inputClasses}
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password" className={labelClasses}>
              Password :
            </label>
            <input
              type="text"
              id="password"
              className={inputClasses}
              placeholder="********"
            />
          </div>
          <div></div>
          <div className=" text-lg font-semibold text-primary text-end cursor-pointer">
            Change Password ?
          </div>
        </div>
      </div>
      <div className="flex justify-center w-100">
        <button className="text-white bg-dark w-100 mx-20 text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14  py-3.5   focus:outline-none ">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default ResetPass;
