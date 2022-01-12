import FullCalendarApp from './components/FullCalendarApp';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import AccountSettings from './components/AccountSettings';
import FullUserList from './components/FullUserList';

import './App.css';
import Login from './components/login/Login'
import Registration from './components/login/Registration'

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Registration />} />
          <Route path="/Calendar" element={<FullCalendarApp />} />
          <Route path="Calendar/AccountSettings" element={<AccountSettings />} />
        </Routes>
    </div>
  );
}

export default App;
