import { useState } from 'react';
import { useCategoryStore } from '../../store/category';
import { useProductStore } from '../../store/product';
import type { TProduct } from '../../types/Product';
import { formatText } from '../../utils/formatText';

export const AddProduct = () => {
  const emptyProduct: TProduct = {
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    sku: '',
    weight: 0,
    dimensions: { width: 0, height: 0, depth: 0 },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [],
    returnPolicy: '',
    minimumOrderQuantity: 1,
    meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
    images: [],
    thumbnail: ''
  };
  const { addProduct } = useProductStore();
  const { categoryNamesList } = useCategoryStore();
  const [product, setProduct] = useState<TProduct>(emptyProduct);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setProduct(prev => ({
      ...prev,
      [name]: ['price', 'discountPercentage', 'rating', 'stock', 'weight', 'minimumOrderQuantity'].includes(name) ? Number(value) : value
    }));
  };

  return (
    <div className='flex flex-col p-4'>
      <form
        className='grid grid-cols-2 gap-4'
        onSubmit={e => {
          e.preventDefault();
          addProduct(product);
        }}
      >
        {/* Basic info */}
        <input type='text' name='title' value={product?.title} onChange={handleChange} placeholder='Title' />
        <textarea name='description' value={product?.description} onChange={handleChange} placeholder='Description' />

        {/* Category */}
        <select name='category' value={product?.category} onChange={handleChange}>
          <option value=''>Select category</option>
          {categoryNamesList?.map(cat => (
            <option key={cat} value={cat}>
              {formatText(cat)}
            </option>
          ))}
        </select>

        {/* Numbers */}
        <input type='number' name='price' value={product?.price} onChange={handleChange} placeholder='Price' />
        <input type='number' name='discountPercentage' value={product?.discountPercentage} onChange={handleChange} placeholder='Discount %' />
        <input type='number' name='rating' value={product?.rating} onChange={handleChange} placeholder='Rating' />
        <input type='number' name='stock' value={product?.stock} onChange={handleChange} placeholder='Stock' />
        <input type='number' name='weight' value={product?.weight} onChange={handleChange} placeholder='Weight' />
        <input type='number' name='minimumOrderQuantity' value={product?.minimumOrderQuantity} onChange={handleChange} placeholder='Min Order Qty' />

        {/* Strings */}
        <input type='text' name='brand' value={product?.brand} onChange={handleChange} placeholder='Brand' />
        <input type='text' name='sku' value={product?.sku} onChange={handleChange} placeholder='SKU' />
        <input type='text' name='warrantyInformation' value={product?.warrantyInformation} onChange={handleChange} placeholder='Warranty Info' />
        <input type='text' name='shippingInformation' value={product?.shippingInformation} onChange={handleChange} placeholder='Shipping Info' />
        <input type='text' name='availabilityStatus' value={product?.availabilityStatus} onChange={handleChange} placeholder='Availability' />
        <input type='text' name='returnPolicy' value={product?.returnPolicy} onChange={handleChange} placeholder='Return Policy' />

        {/* Dimensions */}
        <input
          type='number'
          name='width'
          value={product?.dimensions.width}
          onChange={e => setProduct(p => ({ ...p, dimensions: { ...p.dimensions, width: Number(e.target.value) } }))}
          placeholder='Width'
        />
        <input
          type='number'
          name='height'
          value={product?.dimensions.height}
          onChange={e => setProduct(p => ({ ...p, dimensions: { ...p.dimensions, height: Number(e.target.value) } }))}
          placeholder='Height'
        />
        <input
          type='number'
          name='depth'
          value={product?.dimensions.depth}
          onChange={e => setProduct(p => ({ ...p, dimensions: { ...p.dimensions, depth: Number(e.target.value) } }))}
          placeholder='Depth'
        />

        {/* Images */}
        <input type='text' name='thumbnail' value={product?.thumbnail} onChange={handleChange} placeholder='Thumbnail URL' />
        <textarea
          name='images'
          value={product?.images.join(', ')}
          onChange={e => setProduct(p => ({ ...p, images: e.target.value.split(',').map(i => i.trim()) }))}
          placeholder='Image URLs (comma separated)'
        />

        {/* Tags */}
        <textarea
          name='tags'
          value={product?.tags.join(', ')}
          onChange={e => setProduct(p => ({ ...p, tags: e.target.value.split(',').map(t => t.trim()) }))}
          placeholder='Tags (comma separated)'
        />

        <button type='submit' className='col-span-2 bg-blue-500 text-white p-2 rounded'>
          Add Product
        </button>
      </form>
    </div>
  );
};
