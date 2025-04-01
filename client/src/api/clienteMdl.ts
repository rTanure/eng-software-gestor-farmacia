import { ModeloBase } from "./ModeloBase";

export interface ICliente {
  id?: string | null;
  name: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

class ClienteMdl extends ModeloBase {
  constructor() {
    super('/client');
  }

  async getAllClientes() {
    return this.defaultGetRequest<ICliente[]>("")
  }

  async getClienteById(id: string) {
    return this.defaultGetRequest<ICliente>(`/${id}`)
  }

  async createCliente(cliente: any) {
    return this.defaultPostRequest<null>("", cliente)
  }

  async updateCliente(cliente: any) {
    return this.defaultPutRequest<null>("", cliente)
  }

  async deleteCliente(id: string) {
    console.log("aqui")
    return this.defaultDeleteRequest<null>(`/${id}`)
  }
}

export const clienteMdl = new ClienteMdl();