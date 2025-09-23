import type { TProductCategories, TProductCategoryNamesList } from '../types/Category';
import type { TProduct, TProductDeleted, TProductReviews, TProducts } from '../types/Product';
import type { TLoginResponse } from '../types/User';

export interface IApi {
  // Products
  getProducts: () => Promise<TProducts>;
  getProduct: (id: string) => Promise<TProduct>;
  getProductReviews: (id: string) => Promise<TProductReviews>;
  getProductsByCategory: (category: string) => Promise<TProduct[]>;
  searchProducts: (query: string) => Promise<TProduct[]>;
  paginateProducts: (limit: number, skip: number | null) => Promise<TProduct[]>;
  sortProducts: (sortBy: string, order: string) => Promise<TProducts>;
  addProduct: (product: TProduct) => Promise<TProduct | any>;
  updateProduct: (id: string, product: TProduct) => Promise<TProduct>;
  deleteProduct: (id: string) => Promise<TProductDeleted>;

  // Categories
  getCategories: () => Promise<TProductCategories>;
  getCategoryNamesList: () => Promise<TProductCategoryNamesList>;

  // Authentication
  login: (username: string, password: string) => Promise<TLoginResponse>;
}
