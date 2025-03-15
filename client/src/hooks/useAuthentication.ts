import { useNavigate } from "react-router-dom";
import { authMdl } from "../api/authMdl";
import { LoginProps, RegisterProps } from "../types/auth.types"
import { useEffect, useMemo, useState } from "react";

export const useAuthentication = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<any | undefined>(undefined);

  const login = async (props: LoginProps) => {
    authMdl.login(props)
      .then(e => {
        localStorage.setItem('token', `Bearer ${e.data.token}`);
        navigate('/app');
      })
      .catch(e => {
        localStorage.removeItem('token');
        setError('Credenciais inválidas');
        return
      })
  }

  const register = async (props: RegisterProps) => {
    authMdl.register(props)
      .then(e => {
        localStorage.setItem('token', `Bearer ${e.data.token}`);
        navigate('/app');
      })
      .catch(e => {
        localStorage.removeItem('token');
        setError('Erro ao registrar');
        return
      })
  }

  const getToken = () => {
    return localStorage.getItem('token');
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  }

  const getUser = async () => {
    return authMdl.userByToken()
  }

  useEffect(()=> {
    if(getToken()) {
      getUser().then(e => setUser(e.data))
    }
  }, [])

  return {
    login,
    register,
    error,
    logout,
    user
  }
}