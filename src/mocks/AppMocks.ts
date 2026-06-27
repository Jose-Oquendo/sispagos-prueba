import type { PaymentMethod } from 'src/components/models';

export const userAdmin = {
  email: 'admin@correo.com',
  password: '123456',
};

export const userValid = {
  token: 'mock-jwt-token-xyz789',
  user: {
    name: 'Admin Pruebas',
    role: 'Developer',
  },
};

export const paymentMethodsList: PaymentMethod[] = [
  {
    id: 1,
    alias: 'Visa Bancolombia (Wompi)',
    creationDate: '2026/01/15',
    paymentType: 'card',
    cardNumber: '4512 8765 4321 0912',
    cardHolder: 'CARLOS ALBERTO GOMEZ',
    cardExpiry: '08/30',
    cardCvv: '456',
    cardSubType: 'credit',
    paypalEmail: '',
    bankName: '',
    bankAccountType: '',
    bankAccount: '',
    cashProvider: '',
    cashProviderCustom: '',
    cashReference: '',
    isActive: true,
  },
  {
    id: 2,
    alias: 'Cuenta Ahorros Davivienda (Empresarial)',
    creationDate: '2026/03/10',
    paymentType: 'bank',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvv: '',
    cardSubType: '',
    paypalEmail: '',
    bankName: 'Davivienda',
    bankAccountType: 'Ahorros',
    bankAccount: '005670123491', // Formato de cuenta tradicional colombiana
    cashProvider: '',
    cashProviderCustom: '',
    cashReference: '',
    isActive: true,
  },
  {
    id: 3,
    alias: 'Punto Efecty - Recaudo Centro',
    creationDate: '2026/05/18',
    paymentType: 'cash',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvv: '',
    cardSubType: '',
    paypalEmail: '',
    bankName: '',
    bankAccountType: '',
    bankAccount: '',
    cashProvider: 'efecty', // Convenio Efecty
    cashProviderCustom: '',
    cashReference: 'CC-1023456789', // Suele ser la cédula del cliente en convenios colombianos
    isActive: true,
  },
  {
    id: 4,
    alias: 'Corresponsal Bancario (Gane / SuperGiros)',
    creationDate: '2026/06/01',
    paymentType: 'cash',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvv: '',
    cardSubType: '',
    paypalEmail: '',
    bankName: '',
    bankAccountType: '',
    bankAccount: '',
    cashProvider: 'Otro',
    cashProviderCustom: 'SuperGiros Barrio Las Acacias',
    cashReference: 'REF-COL-9982',
    isActive: false, // Inactivo temporalmente
  },
];
