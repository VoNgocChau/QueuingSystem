import {Routes, Route} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import DashboardPage from './components/Dashboard/DashboardPage';
import './App.css'
import ForgotPasswordPage from './components/Login/ForgotPasswordPage';

function App() {
  return (
    <>
      <div className="router-container">
        <Routes>
          <Route path='/login' Component={LoginPage}/>
          <Route path={'/'} Component={DashboardPage}/>
          <Route path={'/forgotpassword'} Component={ForgotPasswordPage}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
