import { useCartStore } from '../store/cart';
import { useGlobalStore } from '../store/global';
import { useProductStore } from '../store/product';

export const Cart = () => {
  const { user } = useGlobalStore();
  const { product } = useProductStore();
  const { cart } = useCartStore();

  return (
    <div>
      {user?.id}
      {product?.title}
      {cart?.total}
    </div>
  );
};
