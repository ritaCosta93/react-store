// services/api.ts
import axios from 'axios';
import type { IApi } from '../interfaces/api';
import type { TProductCategories, TProductCategoriesNamesList } from '../types/Category';
import type { TPaginatedProducts, TProduct, TProductDeleted, TProductReviews, TProducts, TProductsByCategory } from '../types/Product';

const baseURL = 'https://dummyjson.com/products';

export const api: IApi = {
  getProducts: async (): Promise<TProducts> => {
    const res = await axios.get(baseURL);
    return res.data.products;
  },

  getProduct: async (id: string): Promise<TProduct> => {
    const res = await axios.get(`${baseURL}/${id}`);
    return res.data;
  },

  getProductReviews: async (id: string): Promise<TProductReviews> => {
    const res = await axios.get(`${baseURL}/${id}`);
    return res.data.reviews;
  },

  searchProducts: async (query: string): Promise<TProducts> => {
    const res = await axios.get<TProducts>(`${baseURL}/search?q=${query}`);
    return res.data;
  },

  paginateProducts: async (limit: number | null, skip: number | null): Promise<TPaginatedProducts> => {
    const res = await axios.get(`${baseURL}?limit=${limit}&skip=${skip}`);
    return res.data;
  },

  sortProducts: async (sortBy: string, order: string): Promise<TPaginatedProducts> => {
    const res = await axios.get(`${baseURL}?sortBy=${sortBy}&order=${order}`);

    return res.data;
  },

  getCategories: async (): Promise<TProductCategories> => {
    const res = await axios.get<TProductCategories>(`${baseURL}/categories`);
    return res.data;
  },

  getCategoriesNamesList: async (): Promise<TProductCategoriesNamesList> => {
    const res = await axios.get<TProductCategoriesNamesList>(`${baseURL}/category-list`);
    return res.data;
  },

  getProductsByCategory: async (category: string): Promise<TProductsByCategory> => {
    const res = await axios.get<TProductsByCategory>(`${baseURL}/category/${category}`);
    return res.data;
  },

  addProduct: async (product: TProduct): Promise<TProduct> => {
    const res = await axios.post<TProduct>(`${baseURL}/products/add`, product);
    return res.data;
  },

  updateProduct: async (id: string, product: TProduct): Promise<TProduct> => {
    const res = await axios.put<TProduct>(`${baseURL}/products/${id}`, product);
    return res.data;
  },

  deleteProduct: async (id: string): Promise<TProductDeleted> => {
    const res = await axios.delete<TProductDeleted>(`${baseURL}/products/${id}`);
    return res.data;
  }
};
