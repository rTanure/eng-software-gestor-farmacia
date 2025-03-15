import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import Estoque from "../ui/pages/app/Estoque";
import { modules } from "../ui/pages/app/modules";
import AppContainer from "../ui/pages/app/AppContainer";

export default function RouterApp() {
  const {logout} = useAuthentication()
  return (
    <div>
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to={"estoque"} />} />
        {
          modules.map(module => (
            <Route key={module.path} path={module.path} element={<AppContainer children={<module.component />} />} />
          ))
        }
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}
