import React, { useState } from "react";
import Header from "../Common/Header";
import { IconDownload, IconShare2 } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import DeviceMockup from "./DeviceMockup";

const Ios = ({ imgSlide }) => {
  return (
    <>
      <Header title={"Install Application"} />
      <div className="p-4 ">
        <div className="step bg-blend-lighten shadow-xl border rounded-xl">
          <div className="card">
            <div className="p-4 border-b-2 card-header">
              <h3 className="font-semibold text-xl">How to install ??</h3>

              <ul className=" mt-2 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Open the website you want to install the PWA.</li>
                <li>
                  Tap the
                  <span className="text-primary font-semibold">" Share"</span>{" "}
                  button at the bottom of the screen{" "}
                  <IconShare2 className="text-primary inline-block align-middle" />
                </li>
                <li>
                  Scroll down in the Share menu and look for{" "}
                  <span className="text-primary font-semibold">
                    "Add to Home Screen"
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold text-primary">
                    "Add to Home Page"
                  </span>
                  .
                </li>
                <li>
                  Tap on{" "}
                  <span className="font-semibold text-primary">
                    "Add to Home Screen"
                  </span>{" "}
                  or similar option.
                </li>
                <li>
                  Customize the name of the app if desired, then tap{" "}
                  <span className="font-semibold text-primary">"Add"</span> or{" "}
                  <span className="font-semibold text-primary">"Done"</span>.
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
                    <SwiperSlide>
                      <DeviceMockup device={"ios"} img={item} />
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

export default Ios;
