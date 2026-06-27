<template>
  <GenericForm @submit="onSave" @cancel="onResetForm" :loading="isSaving" :cancelLabel="'Limpiar'"
    :submitLabel="'Buscar'">
    <div>
      <GenericInput v-model="formData.nombre" label="Nombre del Método as" />
    </div>

    <div>
      <q-select v-model="formData.tipo" :options="tipoOptions" label="Tipo de Pago" outlined dense emit-value
        map-options />
    </div>

    <div>
      <q-select v-model="formData.estado" :options="estadoOptions" label="Estado" outlined dense emit-value
        map-options />
    </div>

    <div>
      <GenericInput v-model="formData.fechaCreacion" label="Fecha de Creación" mask="date">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="formData.fechaCreacion">
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
import { type MetodoPago } from 'src/components/models';
// import { metodosPagoList } from 'src/mocks/AppMocks';
import GenericForm from 'src/components/common/form/GenericForm.vue';
import GenericInput from 'src/components/common/form/GenericInput.vue';

const tipoOptions = ['Tarjeta de Crédito', 'Tarjeta de Débito', 'Transferencia Bancaria', 'Efectivo', 'Billetera Digital'];
const estadoOptions = [
  { label: 'Activo', value: 'Activo' },
  { label: 'Inactivo', value: 'Inactivo' }
];

const isSaving = ref(false);
const formData = ref<MetodoPago>({
  nombre: '',
  tipo: '',
  estado: 'Activo',
  fechaCreacion: ''
});


const onSave = async () => {
  try {
    isSaving.value = true;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // metodosPagoList.value.push({
    //   id: Date.now(), // ID temporal
    //   ...formData.value
    // });

    onResetForm();
  } catch (error) {
    console.error('Error al guardar:', error);
  } finally {
    isSaving.value = false;
  }
};

const onResetForm = () => {
  formData.value = {
    nombre: '',
    tipo: '',
    estado: 'Activo',
    fechaCreacion: ''
  };
};

</script>
<style scoped></style>
