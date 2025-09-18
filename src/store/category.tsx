import { create } from 'zustand';
import { api } from '../services/api';

import type { TCategoryStore } from '../types/CategoryStore';

export const useCategoryStore = create<TCategoryStore>(set => ({
  categoryNamesList: null,

  getCategoryNamesList: async () => {
    try {
      const data = await api.getCategoryNamesList();
      set({ categoryNamesList: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }
}));
