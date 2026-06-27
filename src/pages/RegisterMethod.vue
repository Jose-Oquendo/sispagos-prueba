<template>
  <q-page>
    <div class="q-pa-md">
      <q-separator class="q-my-md" />
      <div>
        <div class="text-h5 q-bold q-mb-sm">Detalles del Nuevo Método de Pago</div>
      </div>
      <div>
        <PayForm></PayForm>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import PayForm from 'src/components/PayForm.vue';
</script>
