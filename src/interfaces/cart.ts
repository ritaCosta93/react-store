import type { TCart, TCartProduct } from '../types/Cart';

export interface ICartRequests {
  addToCart: (cart: TCartProduct) => Promise<TCart>;
  getCart: (userId: string | number | null) => Promise<TCart>;
}
