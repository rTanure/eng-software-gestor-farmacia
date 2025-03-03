import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginProps, RegisterProps, UserRole } from "../../../types/auth.types";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, error: registerError } = useAuthentication();
  const { control, handleSubmit, setValue } = useForm<RegisterProps>();

  const onSubmit = async (data: RegisterProps) => {
    try {
      await register(data); 
    } catch (error) {
      console.error("Erro no login", error);
    }
  };

  useEffect(() => {
    setValue("role", UserRole.USER);
  }, [])

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
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <select {...field} defaultValue={UserRole.USER}>
              {Object.values(UserRole).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          )}
        />
        <button type="submit">Register</button>
        <Link to="/auth/login">Login</Link>
        <p>{registerError}</p>
      </form>
    </div>
  );
}
