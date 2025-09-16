import type { TProduct } from '../../types/Product';

export const Product = ({ product }: { product: TProduct }) => {
  if (!product) return <p>Loading...</p>;

  const image = product.images?.[0] ?? 'https://via.placeholder.com/150';

  return (
    <div className='product bg-indigo-200 rounded flex flex-col items-center gap-2 p-4 hover:shadow-md'>
      <p>{product.title}</p>
      <img src={image} alt='product image' className='w-32' />
      <p>{product.price}</p>
    </div>
  );
};
