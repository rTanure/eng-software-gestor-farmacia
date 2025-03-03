import React from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginProps, RegisterProps, UserRole } from "../../../types/auth.types";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { Link } from "react-router-dom";

export default function Login() {
  const { login, error: loginError } = useAuthentication();
  const { control, handleSubmit } = useForm<LoginProps>();

  const onSubmit = async (data: LoginProps) => {
    try {
      console.log(data);
      await login(data); 
    } catch (error) {
      console.error("Erro no login", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <input {...field} placeholder="Login" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input type="password" {...field} placeholder="Password" />
          )}
        />
        <button type="submit">Login</button>
        <Link to="/auth/register">Register</Link>
        <p>{loginError}</p>
      </form>
    </div>
  );
}
