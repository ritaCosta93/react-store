import { create } from 'zustand';

import type { TGlobalStore } from '../types/GlobalStore';

export const useGlobalStore = create<TGlobalStore>(set => ({
  authenticated: false
}));
