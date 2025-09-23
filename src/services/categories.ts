import axios from 'axios';
import type { IApi } from '../interfaces/api';
import type { ICategoriesRequests } from '../interfaces/categoriesRequests';
import type { TProductCategories, TProductCategoryNamesList } from '../types/Category';

const baseURL: IApi['baseUrl'] = 'https://dummyjson.com/products';

export const categoriesApi: ICategoriesRequests = {
  //Categories
  getCategories: async (): Promise<TProductCategories> => {
    const res = await axios.get<TProductCategories>(`${baseURL}/categories`);
    return res.data;
  },

  getCategoryNamesList: async (): Promise<TProductCategoryNamesList> => {
    const res = await axios.get<TProductCategoryNamesList>(`${baseURL}/category-list`);
    return res.data;
  }
};
