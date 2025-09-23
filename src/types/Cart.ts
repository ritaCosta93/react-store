import type { TProduct } from './Product';

export type TCart = {
  id: number;
  products?: [
    {
      id?: TProduct['id'];
      title?: TProduct['title'];
      price?: TProduct['price'];
      quantity?: number;
      total?: number;
      discountPercentage?: TProduct['discountPercentage'];
      discountedPrice?: number;
      thumbnail?: TProduct['thumbnail'];
    }
  ];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type TCartProduct = {
  userId?: number | undefined | string;
  products: [
    product: {
      id: number | undefined | string;
      quantity: number;
    }
  ];
};
