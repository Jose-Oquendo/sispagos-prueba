export interface MetodoPago {
  id: number;
  alias: string;
  creationDate: string;
  paymentType: string;
  cardNumber: string;
  cardHolder: string;
  cardExpiry: string;
  cardCvv: string;
  cardSubType: string;
  paypalEmail: string;
  bankName: string;
  bankAccountType: string;
  bankAccount: string;
  cashProvider: string;
  cashProviderCustom: string;
  cashReference: string;
  isActive: boolean;
}

export interface filter {
  id?: number;
  name: string;
  type: string;
  state: 'Activo' | 'Inactivo';
  dateCreation: string;
}
