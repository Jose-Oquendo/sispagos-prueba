import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { simulatedData } from './mock';

const api = axios.create({
  baseURL: 'https://api.tudominio.com/v1',
});

// mock
simulatedData(api);

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
