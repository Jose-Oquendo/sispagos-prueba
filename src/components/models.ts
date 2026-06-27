export interface MetodoPago {
  id?: number;
  nombre: string;
  tipo: string;
  estado: 'Activo' | 'Inactivo';
  fechaCreacion: string;
}
