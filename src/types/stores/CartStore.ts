import type { TCart, TCartProduct } from '../Cart';

export type TCartStore = {
  cart: TCart | null;
  cartProduct: TCartProduct | null;
  addToCart: (cart: TCartProduct) => Promise<void>;
};
