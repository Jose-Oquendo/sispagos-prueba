<template>
  <q-layout view="lCg lFf" class="auth-bg">
    <q-page-container>
      <router-view v-if="!auth.loading" />

      <q-inner-loading :showing="auth.loading" label="Cargando entorno seguro..."
        label-class="text-white text-subtitle1" label-style="font-size: 1.1em">
        <q-spinner-ios size="60px" color="secondary" />
      </q-inner-loading>

    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth';

const auth = useAuthStore();
</script>

<style scoped lang="scss">
.auth-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
</style>
