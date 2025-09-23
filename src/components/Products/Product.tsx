import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';

export const Product = ({ product }: { product: TProduct }) => {
  const { setProduct } = useProductStore();
  const navigate = useNavigate();

  const handleProduct = (product: TProduct) => {
    if (!product) return;

    setProduct(product);

    const id = product.id?.toString();
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  if (!product) return <p>Loading...</p>;

  const image = product.images?.[0] ?? 'https://via.placeholder.com/150';

  return (
    <div className='product bg-indigo-200 rounded flex flex-col items-center gap-2 p-4 hover:shadow-md cursor-pointer' onClick={() => handleProduct(product)}>
      <p>{product.title}</p>
      <img src={image} alt='product image' className='w-32' />
      <p>{product.price}</p>
    </div>
  );
};
