import { defineStore } from 'pinia';
// import { type MetodoPago } from 'src/components/models';
import { api } from 'src/boot/axios';

interface MetodoPago {
  id?: number;
  name: string;
  type: string;
  state: 'Activo' | 'Inactivo';
  dateCreation: string;
}

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    paymentList: [] as MetodoPago[],
    formData: {} as MetodoPago,
    tipoOptions: [
      'Tarjeta de Crédito',
      'Tarjeta de Débito',
      'Transferencia Bancaria',
      'Efectivo',
      'Billetera Digital',
    ],
    estadoOptions: [
      { label: 'Activo', value: 'Activo' },
      { label: 'Inactivo', value: 'Inactivo' },
    ],
  }),
  getters: {
    filteredPaymentList(state): MetodoPago[] {
      return state.paymentList.filter((item) => {
        // Filtro por Nombre (ignora mayúsculas/minúsculas y busca coincidencias parciales)
        const matchesName =
          !state.formData.name ||
          item.name.toLowerCase().includes(state.formData.name.toLowerCase());

        // Filtro por Tipo de Pago (coincidencia exacta)
        const matchesType = !state.formData.type || item.type === state.formData.type;

        // Filtro por Estado (coincidencia exacta)
        const matchesState = !state.formData.state || item.state === state.formData.state;

        // Filtro por Fecha de Creación (coincidencia parcial o exacta según uses q-input)
        const matchesDate =
          !state.formData.dateCreation || item.dateCreation.includes(state.formData.dateCreation);

        // Solo se muestra el registro si cumple TODOS los filtros activos
        return matchesName && matchesType && matchesState && matchesDate;
      });
    },
  },
  actions: {
    async fetchPaymentList() {
      try {
        const response = await api.get('/payment/list');
        this.paymentList = response.data;
      } catch (error) {
        console.error('Error fetching payment list:', error);
        throw error;
      }
    },
    async resetFormData() {
      this.formData = {} as MetodoPago;
      await this.fetchPaymentList(); // Refresh
    },
  },
});
