import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/Login/LoginPage'
import DashboardPage from '../components/Dashboard/DashboardPage'
import ForgotPasswordPage from '../components/Login/ForgotPasswordPage'
import ComfirmNewPassword from '../components/Login/assets/ComfirmNewPassword'
import ProfilePage from '../components/Profile/ProfilePage'
import DevicePage from '../pages/Devices/DevicePage'
import AddDevicePage from '../pages/Devices/AddDevicePage'
import DetailDevicePage from '../pages/Devices/DetailDevicePage'
import Service from '../pages/Service/Service'
import AddService from '../pages/Service/AddService'
import DetailService from '../pages/Service/DetailService'

const Router = () => {
  return (
    <div className="router-container">
        <Routes>
          <Route path='/login' Component={LoginPage}/>
          <Route path={'/'} Component={DashboardPage}/>
          <Route path={'/forgotpassword'} Component={ForgotPasswordPage}/>
          <Route path={'/confirmPwd'} Component={ComfirmNewPassword}/>
          <Route path={'/profile'} Component={ProfilePage}/>
          <Route path={'/devices'} Component={DevicePage}/>
          <Route path={'/device_add/:id'} element={<AddDevicePage />}/>
          <Route path={'/device_add'} element={<AddDevicePage />}/>
          <Route path={'/details/:id'} Component={DetailDevicePage}/>
          <Route path={'/services'} Component={Service}/>
          <Route path={'/service-add'} Component={AddService}/>
          <Route path={'/service-add/:id'} Component={AddService}/>
          <Route path={'/service-details/:id'} Component={DetailService}/>
        </Routes>
      </div>
  )
}

export default Router