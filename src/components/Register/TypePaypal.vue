<template>
  <div class="row full-width">
    <div class="col-12">
      <GenericInput v-model="paymentStore.formData.paypalEmail" type="email" label="Correo Electrónico de PayPal"
        placeholder="tu-correo@paypal.com" :rules="[
          (val: string) => !!val || 'Obligatorio',
          (val: string) => /.+@.+\..+/.test(val) || 'Formato de correo no válido'
        ]" color="indigo-6">
        <template #prepend>
          <q-icon name="mail" color="blue-grey-4" />
        </template>
      </GenericInput>

      <p class="text-caption text-grey-6 q-px-xs hint-text">
        Serás redirigido a la plataforma externa de PayPal para autorizar
        los cobros futuros de manera encriptada.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import GenericInput from '../common/form/GenericInput.vue';
import { usePaymentStore } from 'src/stores/payment-store';

const paymentStore = usePaymentStore();

</script>

<style scoped>
/* Para lograr el tamaño ultra pequeño exacto de text-[11px] de tu diseño */
.hint-text {
  font-size: 11px;
  line-height: 14px;
}
</style>
