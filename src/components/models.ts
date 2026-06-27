export interface MetodoPago {
  id?: number;
  name: string;
  type: string;
  state: 'Activo' | 'Inactivo';
  dateCreation: string;
}
