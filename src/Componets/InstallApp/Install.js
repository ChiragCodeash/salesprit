import React, { useEffect, useState } from "react";
import Windows from "./Windows";
import Ios from "./Ios";

const Install = () => {
  const [isIos, setIsIos] = useState(false);
  const [imgSlide, setImgSlide] = useState([
    "ss/ss_m02.jpeg",
    "ss/ss_m01.jpeg",
    "ss/ss_m03.jpeg",
    "ss/ss_m04.jpeg",
    "ss/ss_m05.jpeg",
    "ss/ss_m06.jpeg",
    "ss/ss_m07.jpeg",
  ]);
  useEffect(() => {
    function iOS() {
      return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.platform) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      );
    }

    const isIos = iOS();
    setIsIos(isIos);
  }, []);
  return (
    <>{isIos ? <Ios imgSlide={imgSlide} /> : <Windows imgSlide={imgSlide} />}</>
  );
};

export default Install;
