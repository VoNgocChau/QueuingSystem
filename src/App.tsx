import {Routes, Route} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import DashboardPage from './components/Dashboard/DashboardPage';
import './App.css'
import ForgotPasswordPage from './components/Login/ForgotPasswordPage';
import ComfirmNewPassword from './components/Login/assets/ComfirmNewPassword';
import ProfilePage from './components/Profile/ProfilePage';
import DivicePage from './components/Devices/DivicePage';

function App() {
  return (
    <>
      <div className="router-container">
        <Routes>
          <Route path='/login' Component={LoginPage}/>
          <Route path={'/'} Component={DashboardPage}/>
          <Route path={'/forgotpassword'} Component={ForgotPasswordPage}/>
          <Route path={'/confirmPwd'} Component={ComfirmNewPassword}/>
          <Route path={'/profile'} Component={ProfilePage}/>
          <Route path={'/devices'} Component={DivicePage}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
