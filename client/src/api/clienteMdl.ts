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
    return this.defaultGetRequest<ICliente>("")
  }

  async getClienteById(id: string) {
    return this.defaultGetRequest<ICliente>(`/${id}`)
  }

  async createCliente(cliente: any) {
    return this.defaultPostRequest<ICliente>("", cliente)
  }

  async updateCliente(cliente: any) {
    return this.defaultPutRequest<ICliente>("", cliente)
  }

  async deleteCliente(id: string) {
    return this.defaultDeleteRequest<ICliente>(`/${id}`)
  }
}

export const clienteMdl = new ClienteMdl();