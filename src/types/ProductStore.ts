import type { TProduct, TProductReviews, TProducts } from './Product';

export type TProductStore = {
  products: TProduct[];
  product: TProduct | null;
  totalProducts: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  productReviews: TProductReviews | null;
  searchTerm: string | null;
  getProducts: () => Promise<TProducts>;
  getProductReviews: (id: string) => Promise<void>;
  getProduct: (id: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  sortProducts: (sortBy: string, order: string) => Promise<void>;
  getProductsByCategory: (category: string) => Promise<void>;
  addProduct: (product: TProduct) => Promise<void>;
  updateProduct: (id: string, product: TProduct) => Promise<void>;
  deleteProduct: (id: string, product: TProduct) => Promise<void>;
  setPage: (page: number) => void;
};
