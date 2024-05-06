import React, { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import { IconDownload } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import DeviceMockup from "./DeviceMockup";
import { GlobalContext } from "../../context/ContextState";

const Windows = ({ imgSlide }) => {
  const { showInstallPrompt, handleInstallClick } = useContext(GlobalContext);

  const InstallButton = () => {
    return (
      <button
        onClick={handleInstallClick}
        id="Install_btn"
        className="flex items-center gap-2 align-middle capitalize text-white bg-dark text-light text-center   font-medium rounded-lg text-sm p-3 "
      >
        <IconDownload className="h-5 w-5"/>
        Install
      </button>
    );
  };

  return (
    <>
      <Header
        title={"Install Application"}
        CustomeHeader={showInstallPrompt && <InstallButton />}
      />
      <div className="p-4 ">
        <div className="step bg-blend-lighten shadow-xl border rounded-xl">
          <div className="card">
            <div className="p-4 border-b-2 card-header">
              <h3 className="font-semibold text-xl">How to install ??</h3>

              <ul className=" mt-2 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Open the website you want to install the PWA.</li>
                <li>
                  Look for an{" "}
                  <span className="text-primary font-semibold capitalize">
                    install option
                  </span>{" "}
                  or{" "}
                  <span className="text-primary font-semibold capitalize">
                    prompt
                  </span>
                  .
                </li>
                <li>
                  Click on the{" "}
                  <span className="text-primary font-semibold capitalize">
                    Install
                  </span>{" "}
                  option and follow the{" "}
                  <span className="text-primary font-semibold capitalize">
                    Instructions
                  </span>
                  .
                </li>
                <li>
                  Once{" "}
                  <span className="text-primary font-semibold capitalize">
                    Installed
                  </span>
                  , access the PWA from your device's {" "}
                   <span className="text-primary font-semibold capitalize">
                     home screen {" "}
                  </span>
                  or {" "}
                  <span className="text-primary font-semibold capitalize">
                    app launcher {" "}
                  </span>
                  .
                </li>
              </ul>

              <p className="text-gray-500 mt-2">
                Enjoy the convenience of our Web App – simply install it on your
                device for quick access anytime, anywhere! Say goodbye to
                browser tabs clutter and hello to seamless integration with your
                device's interface.
              </p>
            </div>
            <div className="p-4 card-body">
              <Swiper
                slidesPerView={5}
                freeMode={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  390: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1800: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                modules={[FreeMode]}
                className="mySwiper"
              >
                {imgSlide.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <DeviceMockup device={"default"} img={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="show"></div>
      </div>
    </>
  );
};

export default Windows;
