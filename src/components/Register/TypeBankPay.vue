<template>
  <div class="row full-width">
    <div class="col-12 col-md-6">
      <GenericInput v-model="paymentStore.formData.bankName" label="Nombre del Banco" placeholder="Banco de Comercio"
        :rules="[(val: string) => !!val || 'Obligatorio']" color="indigo-6" />
    </div>

    <div class="col-12 col-md-6">
      <q-select v-model="paymentStore.formData.bankAccountType" :options="paymentStore.bankAccountTypes"
        label="Tipo de Cuenta" outlined dense emit-value map-options color="indigo-6" bg-color="white" />
    </div>

    <div class="col-12">
      <GenericInput v-model="paymentStore.formData.bankAccount" label="Número de Cuenta / IBAN / CLABE"
        placeholder="ESXX XXXX XXXX XXXX XXXX" :rules="[(val: string) => !!val || 'Obligatorio']" color="indigo-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GenericInput from '../common/form/GenericInput.vue';
import { usePaymentStore } from 'src/stores/payment-store';

const paymentStore = usePaymentStore();

</script>
