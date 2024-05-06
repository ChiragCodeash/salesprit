import React, { useEffect, useState } from "react";
import Layout from "./Componets/Layout";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Auth from "./Componets/Authentication/Auth";
import Login from "./Componets/Authentication/Login";
import Registration from "./Componets/Authentication/Registration";
import ForgetPassword from "./Componets/Authentication/ForgetPassword";
import ResetPassword from "./Componets/Authentication/ResetPassword";
import PasswordChangeSuccess from "./Componets/Authentication/PasswordChangeSuccess";
import BottomToTop from "./Componets/Common/BottomToTop";

const App = () => {
  // const [isIos , setIsIos] = useState()
  // useEffect(() => {
  //   const userAgent = window.navigator.userAgent.toLowerCase();
  //   // const isIos = /iphone|ipad|ipod/.test(userAgent);
  //   const isIos = /macintosh/.test(userAgent);
  //   console.log("🚀 ~ useEffect ~ isIos:", window.navigator)
  //   setIsIos(isIos);
  // }, []);
  return (
    <>
    {/* <div className="z-50  text-primary border text-center">{isIos}</div> */}
      <BottomToTop />
      <Routes>
        {routes.map((route, index) => {
          if (route.NestedRoutes) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout Componets={route.component} title={route.title} />
                }
              >
                {route.NestedRoutes.map((item, key) => {
                  return (
                    <Route
                      path={item.path}
                      key={key}
                      element={<item.component />}
                    />
                  );
                })}
              </Route>
            );
          } else {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                element={
                  <Layout Componets={route.component} title={route.title} />
                }
              />
            );
          }
        })}
        <Route path={"*"} element={<>404 page</>} />
        <Route path={"/auth"} element={<Auth />}>
          <Route path={""} element={<Login title="Login" />} />
          <Route
            path={"registration"}
            element={<Registration title="Registration" />}
          />
          <Route
            path={"forgetpassword"}
            element={<ForgetPassword title="Forget Password" />}
          />
          <Route
            path={"resetpassword"}
            element={<ResetPassword title="Reset Password" />}
          />
          <Route
            path={"sendlink"}
            element={<PasswordChangeSuccess title="Reset Link" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
