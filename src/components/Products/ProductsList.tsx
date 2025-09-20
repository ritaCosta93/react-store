import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';
import { Pagination } from './Pagination';
import { Product } from './Product';
import { Sort } from './Sort';

export const ProductsList = () => {
  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <Sort />

      <div className='products-list grid grid-cols-6 gap-4'>
        {products.map((product: TProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};
