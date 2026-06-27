import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import type { User } from 'src/components/models';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    email: '',
    password: '',
    loading: false,
    user: {} as User,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async handleLogin() {
      this.loading = true;

      try {
        const response = await api.post('/auth/login', {
          email: this.email,
          password: this.password,
        });

        this.token = response.data.token;
        this.user = response.data.user;

        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        this.token = '';
        this.user = {} as User;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    handleLogout() {
      this.token = '';
      this.user = {} as User;
      this.email = '';
      this.password = '';
      this.loading = false;

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      delete api.defaults.headers.common['Authorization'];
    },
  },
});
