import { create } from 'zustand';

import { productsApi } from '../services/products';
import type { TProduct } from '../types/Product';
import type { TProductStore } from '../types/stores/ProductStore';

export const useProductStore = create<TProductStore>((set, get) => ({
  products: [],
  product: null,
  productReviews: null,
  totalProducts: 0,
  pageSize: 20,
  currentPage: 1,
  totalPages: 1,
  searchTerm: null,
  sortOrder: null,
  setProduct: (product: TProduct | null) => {
    set({ product: product });
  },
  setSearchTerm: (searchTerm: string | null) => {
    set({ searchTerm: searchTerm });
  },
  setSortOrder: (sortOrder: string | null) => {
    set({ sortOrder: sortOrder });
  },

  setPage: (page: number) => {
    const { totalProducts, pageSize } = get();
    const totalPages = Math.ceil(totalProducts / pageSize) || 1;
    const newPage = Math.min(Math.max(page, 1), totalPages);
    set({ currentPage: newPage });
  },

  getProducts: async () => {
    try {
      const data = await productsApi.getProducts();
      set({
        products: data.products,
        totalProducts: data.total
      });
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  },

  getProductReviews: async id => {
    productsApi
      .getProductReviews(id)
      .then(data => {
        set({ productReviews: data });
        return data;
      })
      .catch(err => {
        throw err;
      });
  },

  getProduct: async id => {
    productsApi
      .getProduct(id)
      .then(data => {
        set({ product: data });
        return data;
      })
      .catch(err => {
        throw err;
      });
  },

  searchProducts: async query => {
    try {
      const data = await productsApi.searchProducts(query);
      set({ searchTerm: query });
      set({ products: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
      throw error;
    }
  },

  sortProducts: async (sortBy, order) => {
    try {
      const data = await productsApi.sortProducts(sortBy, order);
      set({
        products: data.products || []
      });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  getProductsByCategory: async category => {
    try {
      const data = await productsApi.getProductsByCategory(category);
      set({ products: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  addProduct: async product => {
    try {
      const data = await productsApi.addProduct(product);
      set(state => ({ products: [...state.products, data] }));
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  updateProduct: async (id, product) => {
    try {
      const data = await productsApi.updateProduct(id, product);
      set({ product: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  deleteProduct: async id => {
    try {
      const data = await productsApi.deleteProduct(id);
      set({ product: data.product });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }
}));
