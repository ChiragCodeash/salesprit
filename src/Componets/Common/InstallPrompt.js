import { IconBrandAndroid, IconShare2, IconSquareRoundedPlusFilled, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [show, setShow] = useState(true);
  const [isIos, setIsIos] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setShowInstallPrompt(true);
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          window.location.reload();
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    if (isStandalone) {
      // Redirect logic here
      console.log("App is installed");
    }
  }, []);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIos);
  }, []);

  const HidePromt = () => {
    setShow(false);
  };

  return (
    <>
    {
      showInstallPrompt &&
      (!isIos ? (
        <div
          className={`fixed w-60 bottom-28 left-1/2 -translate-x-1/2 z-50 ${
            !show && "hidden"
          }`}
        >
          <div className="bg-primary  flex justify-between p-4 rounded-full gap-6">
            <div className="flex justify-between items-center text-light gap-2 cursor-pointer" onClick={handleInstallClick}>
              <IconBrandAndroid />
              <h1>Download App</h1>
            </div>
            <div>
              <IconX
                className="text-light cursor-pointer"
                onClick={HidePromt}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fixed  w-full lg:w-auto   bottom-28  left-1/2 -translate-x-1/2 z-50 ${
            !show && "hidden"
          }`}
        >
            <div className="mx-5">
          <div className="bg-primary  flex justify-between p-4 items-center rounded-full gap-6">
            <div className="flex justify-between items-center text-light gap-2">
              <IconSquareRoundedPlusFilled className="w-20" />
              <h1 className="capitalize">
                Install this webapp on your iPhone : tap <span className="inline-block" style={{verticalAlign : "sub"}}><IconShare2/>  </span> and then Add to
                homescreen
              </h1>
            </div>
            <div>
              <IconX
                className="text-light cursor-pointer"
                onClick={HidePromt}
              />
            </div>
          </div>
            </div>
        </div>
      ))
    }
    </>
  );
};

export default InstallPrompt;
