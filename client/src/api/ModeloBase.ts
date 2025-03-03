import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8080';

export interface SpringResponseView<T> {
  data: T;
  status: number;
}

export class ModeloBase {
  apiURL: string;
  modulePath: string;

  constructor(path: string) {
    this.modulePath = path;
    this.apiURL = API_URL;
  }

  async defaultPostRequest<T>(path: string, data?: Object): Promise<AxiosResponse<T>> {
    const response = await axios.post<T>(
      API_URL + this.modulePath +  path,
      data,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }
    );
    return response;
  }

  async defaultGetRequest<T>(path: string, params?: Object ): Promise<AxiosResponse<T>> {
    const response = await axios.get<T>(
      API_URL + this.modulePath + path,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        params
      },
    );
    return response;
  }

}