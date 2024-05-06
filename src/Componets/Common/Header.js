import React from "react";

const Header = ( {title , CustomeHeader}) => {
  return (
    <>
      {/* <div className="flex-wrap flex justify-between px-5 py-8"> */}
      <div className="bg-light flex flex-wrap justify-between px-5 py-8 sticky top-0 z-20  mb-2">
        {
          title && <h1 className="font-extrabold text-3xl text-dark">{title}</h1>
        }
        
        {CustomeHeader && CustomeHeader}
      </div>
    </>
  );
};

export default Header;
