import type { TProductCategories, TProductCategoryNamesList } from '../types/Category';
export interface ICategoriesRequests {
  // Categories
  getCategories: () => Promise<TProductCategories>;
  getCategoryNamesList: () => Promise<TProductCategoryNamesList>;
}
