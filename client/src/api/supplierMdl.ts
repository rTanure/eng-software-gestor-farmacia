import { ModeloBase } from "./ModeloBase";

export interface ISupplier {
  id?: string | null;
  companyName: string;
  cnpj: string;
  address: string;
  phone: string;
  email: string;
  category: string;
}

interface IPrescriptionListagemFiltros {
  name?: string;
}

class SupplierMdl extends ModeloBase {
  constructor() {
    super('/supplier');
  }

  async getAll() {
    return this.defaultGetRequest<ISupplier[]>("")
  }

  async getById(id: string) {
    return this.defaultGetRequest<ISupplier>(`/${id}`)
  }

  async create(prescription: ISupplier) {
    return this.defaultPostRequest<null>("", prescription)
  }

  async update(prescription: ISupplier) {
    return this.defaultPutRequest<null>("", prescription)
  }

  async delete(id: string) {
    return this.defaultDeleteRequest<null>(`/${id}`)
  }
}

export const supplierMdl = new SupplierMdl();