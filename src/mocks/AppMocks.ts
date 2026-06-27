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
    nombre: 'Stripe Principal',
    tipo: 'Tarjeta de Crédito',
    estado: 'Activo',
    fechaCreacion: '2026/01/15',
  },
  {
    id: 2,
    nombre: 'PayPal Empresa',
    tipo: 'Billetera Digital',
    estado: 'Activo',
    fechaCreacion: '2026/02/20',
  },
  {
    id: 3,
    nombre: 'Terminal Punto de Venta',
    tipo: 'Efectivo',
    estado: 'Inactivo',
    fechaCreacion: '2026/05/10',
  },
];
