import MockAdapter from 'axios-mock-adapter';
import type { AxiosInstance } from 'axios';
import { userAdmin, userValid } from 'src/mocks/AppMocks';

export function simulatedData(api: AxiosInstance) {
  const mock = new MockAdapter(api, { delayResponse: 1200 });
  mock.onPost('/auth/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    // Simulación de validación básica
    if (email === userAdmin.email && password === userAdmin.password) {
      return [200, userValid];
    } else {
      // Si las credenciales no coinciden, devolvemos un código 401 (No autorizado)
      return [401, { message: 'Correo o contraseña incorrectos' }];
    }
  });
}
