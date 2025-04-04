import { ModeloBase } from "./ModeloBase";

export interface ISale {
  id?: string | null;
  name: string;
  code: string;
  batch: string;
  supplierId: string;
  expirationDate: string;
  receivedAmount: number;
  purchasePrice: number;
}

interface IPrescriptionListagemFiltros {
  name?: string;
}

class SaleMdl extends ModeloBase {
  constructor() {
    super('/stock');
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
    return this.defaultPutRequest<null>("", sale)
  }

  async delete(id: string) {
    return this.defaultDeleteRequest<null>(`/${id}`)
  }
}

export const saleMdl = new SaleMdl();