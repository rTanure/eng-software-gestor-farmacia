import { AxiosResponse } from "axios";
import { LoginProps, RegisterProps } from "../types/auth.types";
import { ModeloBase } from "./ModeloBase";

class AuthMdl extends ModeloBase {
  constructor() {
    super('/auth');
  }

  async login(loginProps: LoginProps): Promise<AxiosResponse<{token: string}>> {
    return this.defaultPostRequest<{token: string}>("/login", loginProps)
  }

  async register(registerProps: RegisterProps): Promise<AxiosResponse<{token: string}>> {
    return this.defaultPostRequest<{token: string}>("/register", registerProps)
  }

  async userByToken() {
    if(!window.localStorage.getItem('token')) return null
    return this.defaultGetRequest("/userByToken");
  }
}

export const authMdl = new AuthMdl();