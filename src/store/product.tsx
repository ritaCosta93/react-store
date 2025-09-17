import { create } from 'zustand';
import { api } from '../services/api';

import type { TProductStore } from '../types/ProductStore';

export const useProductStore = create<TProductStore>(set => ({
  products: null,
  productsByCategory: null,
  product: null,
  productReviews: null,
  searchResults: null,
  paginatedProducts: null,
  sortedProducts: null,
  total: null,
  skip: null,
  limit: 10,

  getProducts: async () => {
    api
      .getProducts()
      .then(data => {
        set({ products: data });
        return data;
      })
      .catch(err => {
        throw err;
      });
  },

  getProductReviews: async id => {
    api
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
    api
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
      const data = await api.searchProducts(query);
      set({ searchResults: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  paginateProducts: async (limit: number, skip: number) => {
    try {
      const data = await api.paginateProducts(limit, skip);

      // Ensure the shape matches your component expectation
      set({
        paginatedProducts: {
          products: data.products || [],
          total: data.total ?? 0,
          skip: data.skip ?? 0,
          limit: data.limit ?? limit
        }
      });

      return data;
    } catch (err) {
      set({
        paginatedProducts: {
          products: [],
          total: 0,
          skip: 0,
          limit
        }
      });
      throw err;
    }
  },

  sortProducts: async (sortBy, order) => {
    try {
      const data = await api.sortProducts(sortBy, order);
      set({
        sortedProducts: {
          products: data.products || [],
          total: data.total ?? 0,
          skip: data.skip ?? 0,
          limit: 0
        }
      });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  getProductsByCategory: async category => {
    try {
      const data = await api.getProductsByCategory(category);
      set({ productsByCategory: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  addProduct: async product => {
    try {
      const data = await api.addProduct(product);
      set({ product: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  updateProduct: async (id, product) => {
    try {
      const data = await api.updateProduct(id, product);
      set({ product: data });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  },

  deleteProduct: async id => {
    try {
      const data = await api.deleteProduct(id);
      set({ product: data.product });
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  }
}));
