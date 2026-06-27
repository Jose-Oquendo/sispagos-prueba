<template>
  <div class="row full-width">
    <div class="col-12 col-md-6">
      <q-select v-model="paymentStore.formData.cashProvider" :options="paymentStore.cashProviders"
        label="Entidad de Recaudo / Punto de Pago" outlined dense emit-value map-options color="indigo-6"
        bg-color="white" />
    </div>

    <div class="col-12 col-md-6">
      <GenericInput v-model="paymentStore.formData.cashProviderCustom" label="Especifique punto de pago"
        placeholder="Ej: Corresponsal de Barrio" :disable="paymentStore.formData.cashProvider !== 'Otro'"
        :bg-color="paymentStore.formData.cashProvider !== 'Otro' ? 'grey-2' : 'white'" :rules="[
          (val: string) => paymentStore.formData.cashProvider !== 'Otro' || !!val || 'Debe especificar el punto de pago'
        ]" color="indigo-6" />
    </div>

    <div class="col-12">
      <GenericInput v-model="paymentStore.formData.cashReference" label="Código / ID de Referencia del Cliente"
        placeholder="Escribe tu número de referencia asociado"
        :rules="[(val: string) => !!val || 'Obligatorio para conciliación en caja']" color="indigo-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GenericInput from '../common/form/GenericInput.vue';
import { usePaymentStore } from 'src/stores/payment-store';

const paymentStore = usePaymentStore();

</script>
