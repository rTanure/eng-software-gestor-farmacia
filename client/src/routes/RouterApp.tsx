import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AppHome from "../ui/pages/app/AppHome";
import { useAuthentication } from "../hooks/useAuthentication";

export default function RouterApp() {
  const {logout} = useAuthentication()
  return (
    <div>
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}
