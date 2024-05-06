import {
  IconAt,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconLock,
} from "@tabler/icons-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = ({title}) => {
  const navigate = useNavigate()
  document.title = `SalaSprit | ${title}`
  return (
    <>
      <div className="m-0 md:m-12 flex flex-col w-full">
        <div className="mb-5">
          <h3 className=" font-semibold xl:text-xl font-base text-gray-500">
            Create new password
          </h3>
          <h1 className="text-2xl xl:text-4xl font-extrabold mt-2">
            Reset Password
          </h1>
        </div>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col gap-4">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                <IconLock className="w-7 h-7 text-gray-500 dark:text-gray-400 text-primary" />
              </div>
              <input
                type="password"
                id="Password"
                className=" border-x-0 border-t-0 border-b-2 border-gray-200  focus:border-orange-300 focus:ring-0   text-sm    block w-full ps-10 p-4  "
                placeholder="New Password"
              />
            </div>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                <IconLock className="w-7 h-7 text-gray-500 dark:text-gray-400 text-primary" />
              </div>
              <input
                type="password"
                id="cPassword"
                className=" border-x-0 border-t-0 border-b-2 border-gray-200  focus:border-orange-300 focus:ring-0   text-sm    block w-full ps-10 p-4  "
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button onClick={()=>navigate("/auth/sendlink")} type="button" className="text-white mt-10 bg-dark text-light text-center w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3  focus:outline-none ">
              Change Password
            </button>
          </div>
          <div className="my-6 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or
            </div>
          </div>
          <div className="flex  items-center gap-3">
            <button className="text-white mt-5  text-center w-full  font-medium rounded-lg text-sm p-3  text-dark border-2 hover:border-black">
              <div className="flex items-center justify-center gap-2">
                <IconBrandGoogleFilled />
                Google
              </div>
            </button>
            <button className="text-white mt-5   text-center w-full  font-medium rounded-lg text-sm p-3  text-dark border-2  hover:border-black">
              <div className="flex items-center justify-center gap-2">
                <IconBrandFacebookFilled />
                Facebook
              </div>
            </button>
          </div>
          <div className="text-center pt-8 font-semibold">
            Remembered your password?
            <Link to={"/auth"} className="text-primary cursor-pointer"> Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
