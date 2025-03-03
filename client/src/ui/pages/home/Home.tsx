import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Sistema de gerenciamento de farmacias</h1>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Registrar</Link>
    </div>
  );
}
