import type { MetodoPago } from 'src/components/models';

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

export const metodosPagoList = <MetodoPago[]>[
  {
    id: 1,
    name: 'Stripe Principal',
    type: 'Tarjeta de Crédito',
    state: 'Activo',
    dateCreation: '2026/01/15',
  },
  {
    id: 2,
    name: 'PayPal Empresa',
    type: 'Billetera Digital',
    state: 'Activo',
    dateCreation: '2026/02/20',
  },
  {
    id: 3,
    name: 'Terminal Punto de Venta',
    type: 'Efectivo',
    state: 'Inactivo',
    dateCreation: '2026/05/10',
  },
];
