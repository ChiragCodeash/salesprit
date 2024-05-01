import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
     
      
        <div className="min-h-screen  text-gray-900 flex justify-center" style={{
                  backgroundImage: 'url("/assets/images/banner/login_bg.svg")',
                  backgroundRepeat : "no-repeat",
                  backgroundSize : "100%"
                }}>
          <div className="m-0 sm:m-10   flex justify-center flex-1">
            <div className="flex-1 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full p-9  bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("/assets/images/banner/auth.svg")',
                }}
              ></div>
            </div>
            <div className="lg:w-1/2 xl:w-1/2 p-6 sm:p-12 flex items-center w-full xl:border-l-2 xl:border-dashed ">
             <Outlet/>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Auth;
