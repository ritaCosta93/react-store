import type { TProductCategories, TProductCategoryNamesList } from '../types/Category';
import type { TPaginatedProducts, TProduct, TProductDeleted, TProductReviews, TProducts } from '../types/Product';

export interface IApi {
  // Products
  getProducts: () => Promise<TProducts>;
  getProduct: (id: string) => Promise<TProduct>;
  getProductReviews: (id: string) => Promise<TProductReviews>;

  searchProducts: (query: string) => Promise<TProducts>;
  paginateProducts: (limit: number, skip: number | null) => Promise<TPaginatedProducts>;
  sortProducts: (sortBy: string, order: string) => Promise<TPaginatedProducts>;
  getProductsByCategory: (category: string) => Promise<TProducts>;
  addProduct: (product: TProduct) => Promise<TProduct>;
  updateProduct: (id: string, product: TProduct) => Promise<TProduct>;
  deleteProduct: (id: string) => Promise<TProductDeleted>;

  // Categories
  getCategories: () => Promise<TProductCategories>;
  getCategoryNamesList: () => Promise<TProductCategoryNamesList>;
}
