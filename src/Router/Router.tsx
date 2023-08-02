import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";
import DashboardPage from "../components/Dashboard/DashboardPage";
import ForgotPasswordPage from "../components/Login/ForgotPasswordPage";
import ComfirmNewPassword from "../components/Login/assets/ComfirmNewPassword";
import ProfilePage from "../components/Profile/ProfilePage";
import DevicePage from "../pages/Devices/DevicePage";
import AddDevicePage from "../pages/Devices/AddDevicePage";
import DetailDevicePage from "../pages/Devices/DetailDevicePage";
import Service from "../pages/Service/Service";
import AddService from "../pages/Service/AddService";
import DetailService from "../pages/Service/DetailService";
import LevelNumber from "../pages/LevelNumber/LevelNumber";
import NewLevelNumber from "../pages/LevelNumber/NewLevelNumber";
import DetailLevelNumber from "../pages/LevelNumber/DetailLevelNumber";
import Report from "../pages/Report/Report";
import { useAuth } from "../context/auth/AuthContext";
import NotFound from "../pages/404/NotFound";
import Role from "../pages/Role/Role";
import AddRole from "../pages/Role/AddRole";
import Account from "../pages/Account/Account";
import AddAccount from "../pages/Account/AddAccount";

const Router = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <div className="router-container">
      
        <Routes>
          <Route path={"/"} Component={DashboardPage} />

          <Route path={"/profile"} Component={ProfilePage} />
          <Route path={"/devices"} Component={DevicePage} />
          <Route path={"/device_add/:id"} element={<AddDevicePage />} />
          <Route path={"/device_add"} element={<AddDevicePage />} />
          <Route path={"/details/:id"} Component={DetailDevicePage} />
          <Route path={"/services"} Component={Service} />
          <Route path={"/service-add"} Component={AddService} />
          <Route path={"/service-add/:id"} Component={AddService} />
          <Route path={"/service-details/:id"} Component={DetailService} />
          <Route path="/numbers" Component={LevelNumber} />
          <Route path="/number-new" Component={NewLevelNumber} />
          <Route path="/number-details/:id" Component={DetailLevelNumber} />
          <Route path="/reports" Component={Report} />
          <Route path="/roles" Component={Role} />
          <Route path="/role-add" Component={AddRole} />
          <Route path="/accounts" Component={Account}/>
          <Route path="/account-add" Component={AddAccount}/>
          <Route path="/login" Component={LoginPage} />
          <Route path={"/forgotpassword"} Component={ForgotPasswordPage} />
          <Route path={"/confirmPwd"} Component={ComfirmNewPassword} />
        </Routes>
      
    </div>
  );
};

export default Router;
