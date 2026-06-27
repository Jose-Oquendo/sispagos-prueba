<template>
  <q-page class="column justify-evenly">
    <div class="q-pa-md">
      <SearchForm></SearchForm>

      <q-separator class="q-my-xl" />

      <div class="text-h6 q-mb-md">Listado de Métodos de Pago</div>

      <GenericTable :rows="metodosPagoList" :columns="columns" row-key="id" @row-press="onMethodSelect">
        <template #body-cells="{ row }">
          <q-td key="nombre">{{ row.nombre }}</q-td>
          <q-td key="tipo">{{ row.tipo }}</q-td>
          <q-td key="estado">
            <q-chip :color="row.estado === 'Activo' ? 'positive' : 'negative'" text-color="white" dense>
              {{ row.estado }}
            </q-chip>
          </q-td>
          <q-td key="fechaCreacion">{{ row.fechaCreacion }}</q-td>
        </template>
      </GenericTable>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import type { QTableProps } from 'quasar';
import { type MetodoPago } from 'src/components/models';
import { metodosPagoList } from 'src/mocks/AppMocks';
import SearchForm from 'src/components/SearchForm.vue';
import GenericTable from 'src/components/common/table/GenericTable.vue';

const columns: QTableProps['columns'] = [
  { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left', sortable: true },
  { name: 'tipo', label: 'Tipo', field: 'tipo', align: 'left', sortable: true },
  { name: 'estado', label: 'Estado', field: 'estado', align: 'center', sortable: true },
  { name: 'fechaCreacion', label: 'Fecha de Creación', field: 'fechaCreacion', align: 'left', sortable: true }
];

const onMethodSelect = (item: MetodoPago) => {
  console.log('Método de pago seleccionado:', item);
  // Aquí podrías cargar el item en el formulario para editarlo o abrir un detalle
};

</script>
