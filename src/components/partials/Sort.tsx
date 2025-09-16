import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';

export const Sort = () => {
  const { sortProducts, products } = useProductStore();

  useEffect(() => {
    // Only call if paginatedProducts exist
    if (products) {
      sortProducts('price', 'desc');
    }
  }, [sortProducts, products]);

  return (
    <div>
      <ul>
        {products?.map((p: TProduct) => (
          <li key={p.id}>{p.price}</li>
        ))}
      </ul>
    </div>
  );
};
