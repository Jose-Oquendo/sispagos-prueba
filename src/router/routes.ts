import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    meta: { requiresAuth: false },
    children: [{ path: '', name: 'Login', component: () => import('pages/auth/LoginPage.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Dashboard', component: () => import('pages/IndexPage.vue') },
      {
        path: '/formulario',
        name: 'Formulario',
        component: () => import('pages/RegisterMethod.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    meta: { requiresAuth: false },
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
