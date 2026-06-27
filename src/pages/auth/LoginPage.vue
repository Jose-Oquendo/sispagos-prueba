<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="login-card q-pa-lg shadow-24">

      <!-- Encabezado -->
      <q-card-section class="text-center q-pb-none">
        <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="person" class="q-mb-md" />
        <div class="text-h5 text-weight-bold text-grey-9">Bienvenido</div>
        <div class="text-caption text-grey-6">Ingresa tus credenciales para acceder</div>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit.prevent="sendlogin" class="q-gutter-md q-mt-md">
        <q-card-section class="q-gutter-y-md q-pt-none">

          <q-input v-model="auth.email" label="Correo Electrónico" type="email" outlined dense lazy-rules
            :rules="[val => val && val.length > 0 || 'El correo es obligatorio']">
            <template v-slot:prepend>
              <q-icon name="email" color="primary" />
            </template>
          </q-input>

          <q-input v-model="auth.password" :type="isPwd ? 'password' : 'text'" label="Contraseña" outlined dense
            lazy-rules :rules="[val => val && val.length >= 6 || 'Mínimo 6 caracteres']">
            <template v-slot:prepend>
              <q-icon name="lock" color="primary" />
            </template>
            <!-- Botón para mostrar/ocultar contraseña -->
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>

        </q-card-section>

        <q-card-actions class="q-px-md q-pb-md">
          <q-btn label="Iniciar Sesión" type="submit" color="primary" class="full-width text-weight-bold" size="lg"
            :loading="auth.loading" rounded unelevated />
        </q-card-actions>
      </q-form>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const auth = useAuthStore();
const isPwd = ref(true);
const router = useRouter();

const sendlogin = async () => {
  try {
    await auth.handleLogin();
    if (auth.isLoggedIn) {
      $q.notify({
        type: 'positive',
        message: 'Inicio de sesión exitoso',
        position: 'top-right',
        timeout: 3000,
      });

      await router.push({ name: 'Dashboard' });

    } else {
      $q.notify({
        type: 'negative',
        message: 'Error al iniciar sesión. Verifica tus credenciales.',
        position: 'top-right',
        timeout: 3000,
      });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};

</script>

<style scoped lang="scss">
.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  /* Efecto cristal de fondo */
}

.style-none {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
