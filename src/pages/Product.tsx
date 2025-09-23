import { useProductStore } from '../store/product';

export const ProductPage = () => {
  const { product } = useProductStore();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-center'>
        <h1>{product?.title}</h1>
      </div>
    </div>
  );
};
