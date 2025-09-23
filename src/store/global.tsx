import { create } from 'zustand';

import { api } from '../services/api';
import type { TGlobalStore } from '../types/GlobalStore';

export const useGlobalStore = create<TGlobalStore>(set => ({
  authenticated: false,
  user: null,

  login: async (username: string, password: string) => {
    try {
      const data = await api.login(username, password);
      set({
        user: data,
        authenticated: true
      });
      return data;
    } catch (error) {
      console.error('Failed to login:', error);
      throw error;
    }
  }
}));
