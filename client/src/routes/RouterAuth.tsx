import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../ui/pages/auth/login";
import Register from "../ui/pages/auth/register";
import Estoque from "../ui/pages/app/modules/Estoque";
import EstoqueAdd from "../ui/pages/app/modules/EstoqueAdd";
export const RouterAuth = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="/estoqueadd" element={<EstoqueAdd />} />
    </Routes>
  );
};
