import { Router, BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const AppRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
