import { ModeloBase } from "./ModeloBase";

export interface ISale {
  id?: string | null;
  clientId: string;
  prescriptionId: string | null;
  productId: string;
  date: string;
  amount: number;
  salePrice: number;
}

interface IPrescriptionListagemFiltros {
  name?: string;
}

class SaleMdl extends ModeloBase {
  constructor() {
    super('/sale');
  }

  async getAll() {
    return this.defaultGetRequest<ISale[]>("")
  }

  async getById(id: string) {
    return this.defaultGetRequest<ISale>(`/${id}`)
  }

  async create(sale: ISale) {
    return this.defaultPostRequest<null>("", sale)
  }

  async update(sale: ISale) {
    return this.defaultPutRequest<null>("/update", sale)
  }

  async delete(id: string) {
    return this.defaultDeleteRequest<null>(`/${id}`)
  }

  async getFaturamento() {
    return this.defaultGetRequest<number>("/totalVendas")
  }

  async getTotalVendido() {
    return this.defaultGetRequest<number>("/totalVendidos")
  }
}

export const saleMdl = new SaleMdl();