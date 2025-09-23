import { create } from 'zustand';
import { cartsApi } from '../services/cart';
import type { TCartProduct } from '../types/Cart';
import type { TCartStore } from '../types/stores/CartStore';

export const useCartStore = create<TCartStore>(set => ({
  cart: null,
  cartProduct: null,
  carts: null,
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
  },

  getCart: async (userId: string | number | null) => {
    cartsApi
      .getCart(userId)
      .then(data => {
        console.log(data);
        set({ carts: data });

        return data;
      })
      .catch(err => {
        throw err;
      });
  }
}));
