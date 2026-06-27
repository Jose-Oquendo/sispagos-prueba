<template>
  <div class="row full-width">
    <div class="col-12 col-md-6">
      <GenericInput v-model="paymentStore.formData.cardNumber" label="Número de Tarjeta"
        placeholder="4000 1234 5678 9010" mask="#### #### #### ####" :rules="[
          (val: string) => !!val || 'Obligatorio',
          (val: string) => val.length === 19 || 'Debe tener 16 dígitos'
        ]" color="indigo-6" class="font-mono" />
    </div>

    <div class="col-12 col-md-6">
      <GenericInput v-model="paymentStore.formData.cardHolder" label="Titular de la Tarjeta" placeholder="Juan Pérez"
        :rules="[(val: string) => !!val || 'Obligatorio']" color="indigo-6" />
    </div>

    <div class="col-12 col-sm-4 col-md-4">
      <GenericInput v-model="paymentStore.formData.cardExpiry" label="Vencimiento" placeholder="MM/AA" mask="##/##"
        :rules="[
          (val: string) => !!val || 'Obligatorio',
          (val: string) => /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(val) || 'Formato MM/AA inválido'
        ]" color="indigo-6" />
    </div>

    <div class="col-12 col-sm-4 col-md-4">
      <GenericInput v-model="paymentStore.formData.cardCvv" type="password" label="Código CVV" placeholder="•••"
        mask="####" :rules="[
          (val: string) => !!val || 'Obligatorio',
          (val: string) => val?.length >= 3 || 'Mínimo 3 dígitos'
        ]" color="indigo-6" />
    </div>

    <div class="col-12 col-sm-4 col-md-4">
      <q-select v-model="paymentStore.formData.cardSubType" :options="cardSubTypes" label="Clasificación" outlined dense
        emit-value map-options color="indigo-6" bg-color="white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GenericInput from '../common/form/GenericInput.vue';
import { usePaymentStore } from 'src/stores/payment-store';

const paymentStore = usePaymentStore();

const cardSubTypes = [
  { label: 'Crédito', value: 'credit' },
  { label: 'Débito', value: 'debit' }
];

</script>

<style scoped>
/* Clase utilitaria por si no tienes configurado una fuente mono global */
.font-mono :deep(input) {
  font-family: monospace;
}
</style>
