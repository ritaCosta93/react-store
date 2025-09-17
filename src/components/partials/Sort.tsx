import { useProductStore } from '../../store/product';

export const Sort = () => {
  const { sortProducts } = useProductStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, direction] = e.target.value.split(',');
    sortProducts(field, direction);
  };

  return (
    <div className='flex flex-row gap-4 p-4'>
      <div className='flex flex-col'>
        <span>Price</span>
        <select onChange={handleChange} className='p-4 rounded'>
          <option value='price,asc'>Lower price</option>
          <option value='price,desc'>Higher price</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <span>Name</span>
        <select onChange={handleChange} className='p-4 rounded'>
          <option value='title,asc'>Name A-Z</option>
          <option value='title,desc'>Name Z-A</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <span>Rating</span>
        <select onChange={handleChange} className='p-4 rounded'>
          <option value='rating,asc'>Less Popular</option>
          <option value='rating,desc'>More Popular</option>
        </select>
      </div>
    </div>
  );
};
