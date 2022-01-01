import FullCalendarApp from './components/FullCalendarApp';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import AccountSettings from './components/AccountSettings';
import './App.css';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Calendar" element={<FullCalendarApp />} />
          <Route path="Calendar/AccountSettings" element={<AccountSettings />} />
        </Routes>
    </div>
  );
}

export default App;
