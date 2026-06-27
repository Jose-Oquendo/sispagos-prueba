<template>
  <q-table :rows="rows" :columns="columns" :row-key="rowKey" :loading="loading" flat bordered v-bind="$attrs">
    <template #body="scope">
      <GenericTableRow :props="scope" :item="scope.row" @row-click="(item) => $emit('row-press', item)">
        <slot name="body-cells" :row="scope.row" :cols="scope.cols" />
      </GenericTableRow>
    </template>

    <template #loading>
      <q-inner-loading showing color="primary" />
    </template>
  </q-table>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import type { QTableProps } from 'quasar';
import GenericTableRow from './GenericTableRow.vue';

interface Props {
  rows: T[]; // En lugar de readonly any[], ahora es un array de tu tipo genérico T
  columns: QTableProps['columns'];
  rowKey?: string;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  rowKey: 'id',
  loading: false
});

defineEmits<{
  (e: 'row-press', item: T): void;
}>();
</script>
