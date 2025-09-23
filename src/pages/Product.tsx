import { useProductStore } from '../store/product';
import { formatText } from '../utils/formatText';

export const ProductPage = () => {
  const { product } = useProductStore();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row w-3/4 justify-center'>
        <div className='flex-col w-1/2'>
          {product?.images.map(image => (
            <img key={product.id} src={image} />
          ))}
        </div>
        <div className='flex flex-col w-1/2 gap-4 '>
          <div className='flex flex-row'>
            <h1 className='font-bold text-4xl'>{product?.title}</h1>
          </div>
          <div className='flex flex-row'>
            <h2 className='text-3xl'>{product?.price}</h2>
          </div>
          <div className='flex flex-row'>
            <p className='text-xl'>{product?.description}</p>
          </div>
          <div className='flex flex-row'>
            <span>Stock: {product?.stock}</span>
          </div>
          <div className='flex flex-row'>
            <span>SKU: {product?.sku}</span>
          </div>
          <div className='flex flex-row gap-2'>
            <span>Brand: {product?.brand}</span>
            <span>Category: {formatText(product?.category)}</span>
            <span>Tags: {product?.tags}</span>
          </div>
          <div className='flex flex-row'>
            <button className='bg-indigo-600 text-white hover:bg-indigo-500 hover:font-bold hover:text-black rounded p-4'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
