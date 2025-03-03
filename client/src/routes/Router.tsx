import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterAuth } from "./RouterAuth";
import Home from "../ui/pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<RouterAuth />} />
      </Routes>
    </BrowserRouter>
  );
};