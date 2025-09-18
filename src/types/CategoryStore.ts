import type { TProductCategoryNamesList } from './Category';

export type TCategoryStore = {
  categoryNamesList: TProductCategoryNamesList | null;
  getCategoryNamesList: () => Promise<void>;
};
