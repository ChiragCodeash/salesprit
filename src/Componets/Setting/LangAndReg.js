import React from "react";
import SettingHeader from "./SettingHeader";

const LangAndReg = () => {
  const Country = [
    {
      country: "India",
    },
    {
      country: "Italy",
    },
    {
      country: "South Africa",
    },
    {
      country: "Mexico",
    },
    {
      country: "Singapore",
    },
    {
      country: "Canada",
    },
    {
      country: "New Zealand",
    },
    {
      country: "Mexico",
    },
    {
      country: "Philippines",
    },
    {
      country: "Nigeria",
    },
    {
      country: "Turkey",
    },
  ];
  const Language = [
    { language: "English", code: "en" },
    { language: "Spanish", code: "es" },
    { language: "French", code: "fr" },
    { language: "German", code: "de" },
    { language: "Chinese", code: "zh" },
    { language: "Japanese", code: "ja" },
    { language: "Russian", code: "ru" },
    { language: "Arabic", code: "ar" },
    { language: "Hindi", code: "hi" },
    { language: "Portuguese", code: "pt" },
  ];

  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;
  return (
    <>
      <SettingHeader
        title={"Language & Region"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remad aperiam eaque ipsa quae ab illo inventore"
        }
      />

      <div className="py-10">
        <div className="grid gap-11 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="country" className={labelClasses}>
              Choose Region :
            </label>
            <select type="text" id="country" className={inputClasses}>
              {Country.map((item, i) => {
                return (
                  <option value={item.country} key={i}>
                    {item.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div></div>
          <div>
            <label htmlFor="country" className={labelClasses}>
              Choose Language :
            </label>
            <select type="text" id="country" className={inputClasses}>
              {Language.map((item, i) => {
                return (
                  <option value={item.language} key={i}>
                    {item.language} - {item.code}
                  </option>
                );
              })}
            </select>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center w-100">
        <button className="text-white bg-dark w-100  text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14  py-3.5   focus:outline-none ">
          Save Change
        </button>
      </div>
    </>
  );
};

export default LangAndReg;
