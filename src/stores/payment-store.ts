import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import type { MetodoPago, filter } from 'src/components/models';

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    savingCreationData: [] as MetodoPago[],
    paymentList: [] as MetodoPago[],
    filterData: {} as filter,
    formData: {} as MetodoPago,
    paymentTypes: [
      { label: 'Tarjeta', search: 'Tarjeta', value: 'card', icon: 'credit_card' },
      { label: 'PayPal', search: 'Billetera Digital', value: 'paypal', icon: 'payment' },
      { label: 'Banco', search: 'Transferencia Bancaria', value: 'bank', icon: 'account_balance' },
      { label: 'Efectivo', search: 'Efectivo', value: 'cash', icon: 'local_atm' },
    ],
    estadoOptions: [
      { label: 'Activo', value: 'Activo' },
      { label: 'Inactivo', value: 'Inactivo' },
    ],
    cashProviders: [
      { label: 'Efecty', value: 'Efecty' },
      { label: 'Via Baloto', value: 'Baloto' },
      { label: 'Tiendas OXXO', value: 'OXXO' },
      { label: 'SuperGiros', value: 'SuperGiros' },
      { label: 'SuRed (Gane / Paga Todo)', value: 'SuRed' },
      { label: 'Corresponsal Bancolombia', value: 'CorresponsalBancolombia' },
      { label: 'Corresponsal Davivienda / Conred', value: 'CorresponsalDavivienda' },
      { label: 'Western Union', value: 'WesternUnion' },
      { label: 'Otro punto de recaudo', value: 'Otro' },
    ],
    bankAccountTypes: [
      { label: 'Cuenta Corriente', value: 'checking' },
      { label: 'Cuenta de Ahorros', value: 'savings' },
      { label: 'Clave Interbancaria (CCI)', value: 'clabe' },
    ],
  }),
  getters: {
    tipoOptions(state): string[] {
      return state.paymentTypes.map((item) => item.search);
    },
    filteredPaymentList(state): MetodoPago[] {
      state.paymentList = [...state.paymentList, ...state.savingCreationData];
      return state.paymentList.filter((item) => {
        const matchesName =
          !state.filterData.name ||
          item.alias.toLowerCase().includes(state.filterData.name.toLowerCase());

        const actualType = state.paymentTypes.find((t) => t.value === item.paymentType)?.search;
        const matchesType = !state.filterData.type || actualType === state.filterData.type;

        const actualState = item.isActive == true ? 'Activo' : 'Inactivo';
        const matchesState = !state.filterData.state || actualState === state.filterData.state;

        const matchesDate =
          !state.filterData.dateCreation ||
          item.creationDate.includes(state.filterData.dateCreation);

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
    async resetFilterData() {
      this.filterData = {} as filter;
      await this.fetchPaymentList(); // Refresh
    },
    saveNewMethod() {
      this.savingCreationData.push(this.formData);
      this.formData = {} as MetodoPago;
    },
    cleanTypeData() {
      this.formData.cardNumber = '';
      this.formData.cardHolder = '';
      this.formData.cardExpiry = '';
      this.formData.cardCvv = '';
      this.formData.cardSubType = '';
      this.formData.paypalEmail = '';
      this.formData.bankName = '';
      this.formData.bankAccountType = '';
      this.formData.bankAccount = '';
      this.formData.cashProvider = '';
      this.formData.cashProviderCustom = '';
      this.formData.cashReference = '';
    },
  },
});
