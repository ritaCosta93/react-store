import { create } from 'zustand';

import { categoriesApi } from '../services/categories';
import type { TCategoryStore } from '../types/stores/CategoryStore';

export const useCategoryStore = create<TCategoryStore>(set => ({
  categoryNamesList: null,

  getCategoryNamesList: async () => {
    try {
      const data = await categoriesApi.getCategoryNamesList();
      set({ categoryNamesList: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }
}));
