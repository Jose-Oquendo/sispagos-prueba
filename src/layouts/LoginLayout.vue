<template>
  <q-layout view="lCg lFf" class="auth-bg">
    <div class="auth-bg-color"></div>
    <q-page-container class="auth-content">
      <router-view v-if="!auth.loading" />

      <q-inner-loading class="auth-loading" :showing="auth.loading" label="Cargando entorno seguro..."
        label-class="text-white text-subtitle1" label-style="font-size: 1.1em">
        <q-spinner-ios size="60px" color="primary" />
      </q-inner-loading>

    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth-store';

const auth = useAuthStore();
</script>

<style lang="scss">
.auth-bg {
  background-image: url('src/assets/fondoLogin.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100dvh;
  z-index: 1;
}

.auth-bg-color {
  background: linear-gradient(135deg, #667eea24 0%, #764ba275 100%);
  min-height: 100vh;
  position: absolute;
  width: 100%;
  height: 100dvh;
  z-index: 2;
}

.auth-content {
  position: relative;
  z-index: 50;
}

.auth-loading {
  position: relative;
  width: 100%;
  height: 100dvh;
}
</style>
