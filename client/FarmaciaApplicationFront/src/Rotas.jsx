import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Estoque from './pages/Estoque';

const AppRotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
    </Router>
  );
};

export default AppRotas;
