<template>
  <q-tr :props="props" class="custom-hover-row" @click="$emit('row-click', item)">
    <slot :item="item" />
  </q-tr>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
// 💡 Nota: Usamos "generic" en la etiqueta script (disponible desde Vue 3.3+)
// para que el componente sea dinámico con el tipo de dato que reciba.

interface Props {
  props: Record<string, unknown>; // Aquí 'any' suele ser permitido por ESLint si viene de librerías, pero usamos Record para asegurar el objeto
  item: T;
}

defineProps<Props>();

defineEmits<{
  (e: 'row-click', item: T): void;
}>();
</script>

<style scoped>
.custom-hover-row {
  transition: background-color 0.2s ease, cursor 0.2s ease;
}

.custom-hover-row:hover {
  background-color: rgba(var(--q-primary), 0.08) !important;
  cursor: pointer;
}
</style>
