import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterAuth } from "./RouterAuth";
import Home from "../ui/pages/Home/Home";
import RouterApp from "./RouterApp";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<RouterAuth />} />
        <Route path="/app/*" element={<RouterApp />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};