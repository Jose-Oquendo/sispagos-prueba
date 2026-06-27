import { boot } from 'quasar/wrappers';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
  baseURL: 'https://api.tudominio.com/v1',
});

// mock
const mock = new MockAdapter(api, { delayResponse: 1200 });
mock.onPost('/auth/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  // Simulación de validación básica
  if (email === 'admin@correo.com' && password === '123456') {
    return [
      200,
      {
        token: 'mock-jwt-token-xyz789',
        user: {
          name: 'Admin Pruebas',
          role: 'Developer',
        },
      },
    ];
  } else {
    // Si las credenciales no coinciden, devolvemos un código 401 (No autorizado)
    return [401, { message: 'Correo o contraseña incorrectos' }];
  }
});

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
