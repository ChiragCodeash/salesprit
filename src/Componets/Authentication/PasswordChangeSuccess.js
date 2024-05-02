import { IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const PasswordChangeSuccess = ({title}) => {
  document.title = `SalaSprit | ${title}`
  return (
    <>
      <div className="m-0 md:m-12 flex flex-col w-full">
        <div className="mb-5">
          <h3 className="font-semibold xl:text-xl text-gray-500">
            Password changed successfully
          </h3>
          <h1 className="text-2xl xl:text-4xl font-extrabold mt-2">
            Password Changed
          </h1>
        </div>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col gap-10 my-3">
            <h3 className="text-xl font-semibold">
              We have sent a verification link to your email address
              <span className="text-success"> admin@gmail.com</span>
            </h3>
            <h3 className="text-lg font-semibold text-gray-500">
              Just click on the link in your mail box & all done.
            </h3>
          </div>

          <div className="mt-10">
            <Link to={"/auth"}  type="button" className="text-white mt-5 bg-dark text-light text-center w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3  focus:outline-none ">
              Back To Login
            </Link>
            <button className="text-white mt-5 bg-primary text-light text-center w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3  focus:outline-none ">
              Resend Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChangeSuccess;
