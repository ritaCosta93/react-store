import type { TCart, TCartProduct } from '../Cart';

export type TCartStore = {
  cart: TCart | null;
  carts: TCart | null;
  cartProduct: TCartProduct | null;

  addToCart: (cart: TCartProduct) => Promise<void>;
  getCart: (userId: string | number | null) => Promise<void>;
};
