import type { TPaginatedProducts, TProduct, TProductReviews, TProducts } from './Product';

export type TProductStore = {
  products: TProducts | null;
  productsByCategory: TProducts | null;
  product: TProduct | null;
  searchResults: TProducts | null;
  paginatedProducts: TPaginatedProducts | null;
  sortedProducts: TPaginatedProducts | null;
  total: number | null;
  skip: number | null;
  limit: number | null;
  productReviews: TProductReviews | null;
  getProducts: () => Promise<void>;
  getProductReviews: (id: string) => Promise<void>;
  getProduct: (id: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  paginateProducts: (limit: number, skip: number) => Promise<TPaginatedProducts>;
  sortProducts: (sortBy: string, order: string) => Promise<void>;
  getProductsByCategory: (category: string) => Promise<void>;
  addProduct: (product: TProduct) => Promise<void>;
  updateProduct: (id: string, product: TProduct) => Promise<void>;
  deleteProduct: (id: string, product: TProduct) => Promise<void>;
};
