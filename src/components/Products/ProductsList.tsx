import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';
import { Pagination } from './Pagination';
import { Product } from './Product';
import { Sort } from './Sort';

export const ProductsList = () => {
  const { paginatedProducts, paginateProducts, sortedProducts } = useProductStore();

  useEffect(() => {
    paginateProducts(10, 0);
  }, [paginateProducts]);

  if (!paginatedProducts) {
    return <p>Loading...</p>;
  }

  const productsToRender = sortedProducts && sortedProducts.products.length > 0 ? sortedProducts.products : paginatedProducts.products;

  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <Sort />
      <div className='products-list grid grid-cols-4 gap-4'>
        {productsToRender.map((product: TProduct) => (
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
