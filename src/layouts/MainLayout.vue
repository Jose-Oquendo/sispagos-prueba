<template>
  <q-layout view="hHr lpR fFf">

    <!-- Header -->
    <q-header elevated class="bg-primary text-white q-header-pad">
      <q-toolbar>
        <q-toolbar-title>
          SisPagos
          <div class="text-caption">Prueba técnica</div>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer v-model="rightDrawerOpen" side="right" bordered show-if-above :width="280">
      <div class="column fit">

        <!-- Usuario -->
        <q-card flat class="q-ma-md">

          <q-card-section class="text-center">

            <q-avatar size="80px" color="primary" text-color="white">
              {{ auth.user.name?.charAt(0)?.toUpperCase() || "U" }}
            </q-avatar>

            <div class="text-h6 q-mt-md">
              {{ auth.user.name || "Usuario" }}
            </div>

            <div class="text-caption text-grey">
              {{ auth.email }}
            </div>

            <q-chip class="q-mt-sm" color="primary" text-color="white" icon="verified_user">
              {{ auth.user.role || "Administrador" }}
            </q-chip>

          </q-card-section>

        </q-card>

        <q-separator />

        <!-- Menú -->
        <q-list padding>

          <q-item-label header>
            Principal
          </q-item-label>

          <EssentialLink v-for="(item, index) in menu" :key="index" :title="item.title" :caption="item.caption"
            :route="item.route" :icon="item.icon" />

        </q-list>

        <q-space />

        <q-separator />

        <!-- Logout -->
        <q-list padding>

          <q-item clickable v-ripple @click="logout">

            <q-item-section avatar>
              <q-icon name="logout" color="negative" />
            </q-item-section>

            <q-item-section>
              Cerrar sesión
            </q-item-section>

          </q-item>

        </q-list>

      </div>
    </q-drawer>

    <!-- Contenido -->
    <q-page-container class="q-bg-texture">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import EssentialLink from 'src/components/common/menu/EssentialLink.vue';

const router = useRouter()
const auth = useAuthStore()

const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const menu = [
  {
    title: 'Dashboard',
    caption: 'Vista general',
    route: 'Dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Registrar usuario',
    caption: 'Registrar nuevo usuario',
    route: 'Registrar',
    icon: 'person_add',
  },
]

async function logout() {
  auth.handleLogout()
  await router.push({ name: 'Login' })
}
</script>

<style scoped>
.q-header-pad {
  padding: 5px 0px;
}

.q-toolbar-title small {
  display: block;
}

.q-bg-texture {
  --s: 53px;
  /* control the size*/
  --c1: #ffffff;
  --c2: #fcfcfc;

  --c: #0000 75%, var(--c1) 0;
  --g1: conic-gradient(at calc(200%/3) 10%, var(--c));
  --g2: conic-gradient(at 10% calc(200%/3), var(--c));
  background:
    var(--g1), var(--g2),
    var(--g1) var(--s) var(--s),
    var(--g2) var(--s) var(--s),
    var(--g1) calc(2*var(--s)) calc(2*var(--s)),
    var(--g2) calc(2*var(--s)) calc(2*var(--s)) var(--c2);
  background-size: calc(3*var(--s)) calc(3*var(--s));
}
</style>


<!-- <script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'registrar',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'salir',
  },
];

const rightDrawerOpen = ref(false)
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script> -->
