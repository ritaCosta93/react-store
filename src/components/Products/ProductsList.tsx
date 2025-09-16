import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';
import { Pagination } from '../partials/Pagination';
import { Sort } from '../partials/Sort';
import { Product } from './Product';

export const ProductsList = () => {
  const { paginatedProducts, paginateProducts } = useProductStore();

  useEffect(() => {
    paginateProducts(10, 0);
  }, [paginateProducts]);

  if (!paginatedProducts) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <div className='flex flex-row'>
        <Sort />
      </div>
      <div className='products-list grid grid-cols-3 gap-4'>
        {paginatedProducts.products.map((product: TProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={paginatedProducts.total}
        skip={paginatedProducts.skip}
        limit={paginatedProducts.limit}
        onPageChange={page => {
          const newSkip = (page - 1) * paginatedProducts.limit;
          paginateProducts(paginatedProducts.limit, newSkip);
        }}
      />
    </div>
  );
};
