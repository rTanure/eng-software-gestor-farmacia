import { ModeloBase } from "./ModeloBase";

export interface IPrescription {
  id?: string | null;
  doctorName: string;
  doctorCrm: string;
  description: string;
  expirationDate: string;
  clientId: string;
}

interface IPrescriptionListagemFiltros {
  name?: string;
}

class PrescriptionMdl extends ModeloBase {
  constructor() {
    super('/prescription');
  }

  async getAllPrescriptions() {
    return this.defaultGetRequest<IPrescription[]>("")
  }

  async getPrescriptionById(id: string) {
    return this.defaultGetRequest<IPrescription>(`/${id}`)
  }

  async createPrescription(prescription: IPrescription) {
    return this.defaultPostRequest<null>("", prescription)
  }

  async updatePrescription(prescription: IPrescription) {
    return this.defaultPutRequest<null>("", prescription)
  }

  async deletePrescription(id: string) {
    console.log("aqui")
    return this.defaultDeleteRequest<null>(`/${id}`)
  }
}

export const prescriptionMdl = new PrescriptionMdl();