import axios from 'axios';
import type { IApi } from '../interfaces/api';
import type { ICartRequests } from '../interfaces/cart';
import type { TCart, TCartProduct } from '../types/Cart';

const cartURL: IApi['baseUrl'] = 'https://dummyjson.com/carts';

export const cartsApi: ICartRequests = {
  addToCart: async (cart: TCartProduct): Promise<TCart> => {
    const res = await axios.post(`${cartURL}/add`, cart);
    return res.data;
  }
};
