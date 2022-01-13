import { Route, Routes } from 'react-router-dom';
import AccountSettings from './components/AccountSettings';
import FullUserList from './components/FullUserList';
import './App.css';
import Login from './components/login/Login'
import Registration from './components/login/Registration'
import MainCalendarPage from './components/main page/MainCalendarPage'

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Registration />} />
          <Route path="/Calendar" element={<MainCalendarPage />} />
          <Route path="Calendar/AccountSettings" element={<AccountSettings />} />
          <Route path="Calendar/FullUserList" element={<FullUserList />} />
        </Routes>
    </div>
  );
}

export default App;
