<template>
  <q-page class="column justify-betweenp">
    <div class="q-pa-md">
      <SearchForm></SearchForm>

      <q-separator class="q-my-md" />

      <div class="text-h6 q-mb-md">Listado de Métodos de Pago</div>

      <GenericTable :rows="paymentStore.filteredPaymentList" :columns="columns" row-key="id"
        @row-press="onMethodSelect">
        <template #body-cells="{ row }">
          <q-td key="nombre">{{ row.alias }}</q-td>
          <q-td key="tipo">{{paymentStore.paymentTypes.find(t => t.value === row.paymentType)?.search}}</q-td>
          <q-td key="estado">
            <q-chip :color="row.isActive ? 'positive' : 'negative'" text-color="white" dense>
              {{ row.isActive ? 'Activo' : 'Inactivo' }}
            </q-chip>
          </q-td>
          <q-td key="fechaCreacion">{{ row.creationDate }}</q-td>
          <q-td key="acciones">
            <q-toggle v-model="row.isActive" color="indigo-6" dense @click.stop
              @update:model-value="(val) => onStatusChange(val, row)" />
          </q-td>
        </template>
      </GenericTable>
    </div>
  </q-page>
  <!-- Añade este bloque al final de tu template -->
  <PayDetails v-model="isModalOpen"></PayDetails>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { QTableProps } from 'quasar';
import { type MetodoPago } from 'src/components/models';
import { usePaymentStore } from 'src/stores/payment-store';
import SearchForm from 'src/components/SearchForm.vue';
import GenericTable from 'src/components/common/table/GenericTable.vue';
import PayDetails from 'src/components/PayDetails.vue';

const paymentStore = usePaymentStore();
const isModalOpen = ref(false);

const columns: QTableProps['columns'] = [
  { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left', sortable: true },
  { name: 'tipo', label: 'Tipo', field: 'tipo', align: 'left', sortable: true },
  { name: 'estado', label: 'Estado', field: 'estado', align: 'center', sortable: true },
  { name: 'fechaCreacion', label: 'Fecha de Creación', field: 'fechaCreacion', align: 'left', sortable: true },
  { name: 'acciones', label: '', field: 'acciones', align: 'center', sortable: false }
];

const onMethodSelect = (item: MetodoPago) => {
  paymentStore.formData = item; // Guarda el método seleccionado
  isModalOpen.value = true;    // Abre el modal automáticamente
};

const onStatusChange = (nuevoValor: boolean, metodo: MetodoPago) => {
  metodo.isActive = nuevoValor;
};

</script>
