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
          <Route path={'/device_add/:key?'} element={<AddDevicePage />}/>
          <Route path={'/details/:id'} Component={DetailDevicePage}/>
          <Route path={'/services'} Component={Service}/>
        </Routes>
      </div>
  )
}

export default Router