import React from "react";
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
  return (
    <>
    <BottomToTop/>
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
          <Route path={""} element={<Login />} />
          <Route path={"registration"} element={<Registration />} />
          <Route path={"forgetpassword"} element={<ForgetPassword />} />
          <Route path={"resetpassword"} element={<ResetPassword />} />
          <Route path={"sendlink"} element={<PasswordChangeSuccess />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
