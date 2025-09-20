import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductStore } from '../../store/product';

export const Sort = () => {
  const { sortProducts } = useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync store on mount
  useEffect(() => {
    const priceSort = searchParams.get('sortPrice');
    const nameSort = searchParams.get('sortName');
    const ratingSort = searchParams.get('sortRating');

    if (priceSort) sortProducts('price', priceSort);
    if (nameSort) sortProducts('name', nameSort);
    if (ratingSort) sortProducts('rating', ratingSort);
  }, [searchParams, sortProducts]);

  const handleChange = (field: 'price' | 'name' | 'rating', order: 'asc' | 'desc' | '') => {
    // update store
    if (order) {
      sortProducts(field, order);
    }

    // update URL
    const params = new URLSearchParams(searchParams);
    const paramName = `sort${field.charAt(0).toUpperCase() + field.slice(1)}`;

    if (order) {
      params.set(paramName, order);
    } else {
      params.delete(paramName);
    }

    setSearchParams(params);
  };

  const currentPrice = searchParams.get('sortPrice') || '';
  const currentName = searchParams.get('sortName') || '';
  const currentRating = searchParams.get('sortRating') || '';

  return (
    <div className='flex flex-row gap-4 p-4'>
      {/* Price */}
      <div className='flex flex-col'>
        <span>Price</span>
        <select onChange={e => handleChange('price', e.target.value as 'asc' | 'desc' | '')} className='p-4 rounded' value={currentPrice}>
          <option value=''>--</option>
          <option value='asc'>Lower price</option>
          <option value='desc'>Higher price</option>
        </select>
      </div>

      {/* Name */}
      <div className='flex flex-col'>
        <span>Name</span>
        <select onChange={e => handleChange('name', e.target.value as 'asc' | 'desc' | '')} className='p-4 rounded' value={currentName}>
          <option value=''>--</option>
          <option value='asc'>Name A-Z</option>
          <option value='desc'>Name Z-A</option>
        </select>
      </div>

      {/* Rating */}
      <div className='flex flex-col'>
        <span>Rating</span>
        <select onChange={e => handleChange('rating', e.target.value as 'asc' | 'desc' | '')} className='p-4 rounded' value={currentRating}>
          <option value=''>--</option>
          <option value='asc'>Less Popular</option>
          <option value='desc'>More Popular</option>
        </select>
      </div>
    </div>
  );
};
