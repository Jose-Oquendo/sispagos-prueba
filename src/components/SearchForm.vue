<template>
  <GenericForm @submit="onSave" @cancel="onResetForm" :loading="isSaving" :cancelLabel="'Limpiar'"
    :submitLabel="'Buscar'">
    <div>
      <GenericInput v-model="paymentStore.formData.name" label="Nombre del Método" />
    </div>

    <div>
      <q-select v-model="paymentStore.formData.type" :options="paymentStore.tipoOptions" label="Tipo de Pago" outlined
        dense emit-value map-options />
    </div>

    <div>
      <q-select v-model="paymentStore.formData.state" :options="paymentStore.estadoOptions" label="Estado" outlined
        dense emit-value map-options />
    </div>

    <div>
      <GenericInput v-model="paymentStore.formData.dateCreation" label="Fecha de Creación" mask="date">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="paymentStore.formData.dateCreation">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </GenericInput>
    </div>
  </GenericForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePaymentStore } from 'src/stores/payment-store';
import GenericForm from 'src/components/common/form/GenericForm.vue';
import GenericInput from 'src/components/common/form/GenericInput.vue';

const paymentStore = usePaymentStore();
const isSaving = ref(false);

const onSave = async () => {
  try {
    isSaving.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await paymentStore.fetchPaymentList();
  } catch (error) {
    console.error('Error al guardar:', error);
  } finally {
    isSaving.value = false;
  }
};

const onResetForm = async () => {
  await paymentStore.resetFormData();
};

</script>
<style scoped></style>
