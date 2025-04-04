import { ModeloBase } from "./ModeloBase";

export interface IStock {
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

class SupplierMdl extends ModeloBase {
  constructor() {
    super('/stock');
  }

  async getAll() {
    return this.defaultGetRequest<IStock[]>("")
  }

  async getById(id: string) {
    return this.defaultGetRequest<IStock>(`/${id}`)
  }

  async create(prescription: IStock) {
    return this.defaultPostRequest<null>("", prescription)
  }

  async update(prescription: IStock) {
    return this.defaultPutRequest<null>("", prescription)
  }

  async delete(id: string) {
    return this.defaultDeleteRequest<null>(`/${id}`)
  }
}

export const supplierMdl = new SupplierMdl();