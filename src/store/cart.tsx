import { create } from 'zustand';
import { cartsApi } from '../services/cart';
import type { TCartProduct } from '../types/Cart';
import type { TCartStore } from '../types/stores/CartStore';

export const useCartStore = create<TCartStore>(set => ({
  cart: null,
  cartProduct: null,
  addToCart: async (cart: TCartProduct) => {
    cartsApi
      .addToCart(cart)
      .then(data => {
        set({ cart: data });
        return data;
      })
      .catch(err => {
        throw err;
      });
  }
}));
