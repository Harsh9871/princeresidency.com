import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Verified from './pages/Verified';
import UnVerified from './pages/UnVerified';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/unverified" element={<UnVerified />} />
      </Routes>
    </Router>
  );
}

export default App;
