import { useNavigate, useSearchParams } from 'react-router';
import { useCartStore } from '../store/cart';
import { useGlobalStore } from '../store/global';
import { useProductStore } from '../store/product';
import type { TCartProduct } from '../types/Cart';
import type { TProduct } from '../types/Product';
import { formatText } from '../utils/formatText';

export const ProductPage = () => {
  const { product } = useProductStore();
  const { user } = useGlobalStore();
  const navigate = useNavigate();
  const [productParams, setProductParams] = useSearchParams();
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: TProduct) => {
    if (!product || !user?.id) return;

    const cartProduct: TCartProduct = {
      userId: user.id,
      products: [
        {
          id: product.id,
          quantity: product.minimumOrderQuantity
        }
      ]
    };

    addToCart(cartProduct);
    const newParams = new URLSearchParams(productParams);
    newParams.set('id', user.id.toString());

    setProductParams(newParams);

    navigate(`/cart/user/${user.id}`);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row w-3/4 justify-center'>
        <div className='flex-col w-1/2'>
          {product?.images && product.images.length < 2 ? (
            product.images.map((image, i) => <img key={`${product.id}-${i}`} src={image} alt={product.title} />)
          ) : (
            <div className='grid grid-cols-2 gap-2'>
              {product?.images?.map((image, i) => (
                <img key={`${product.id}-${i}`} src={image} alt={product.title} />
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col w-1/2 gap-4 justify-center'>
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
            {product && (
              <button
                className='bg-indigo-600 text-white hover:bg-indigo-500 hover:font-bold hover:text-black rounded p-4'
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
