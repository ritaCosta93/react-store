import { create } from 'zustand';

import { authenticationApi } from '../services/authetication';
import type { TGlobalStore } from '../types/stores/GlobalStore';

export const useGlobalStore = create<TGlobalStore>(set => ({
  authenticated: false,
  user: null,

  login: async (username: string, password: string) => {
    try {
      const data = await authenticationApi.login(username, password);
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
