import React, { useEffect } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

export default function AppHome() {
  const {user} = useAuthentication()


  return <div>{user?.login}</div>;
}
