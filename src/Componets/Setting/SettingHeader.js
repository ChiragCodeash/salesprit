import React from "react";

const SettingHeader = ({ title, description, customeHeader }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">{title}</h3>
          {customeHeader && customeHeader}
        </div>
        {description && (
          <p className="text-gray-500 font-base mt-3">{description}</p>
        )}
      </div>
    </>
  );
};

export default SettingHeader;
