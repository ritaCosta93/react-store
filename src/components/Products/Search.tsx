import { useProductStore } from '../../store/product';

export const Search = () => {
  const { searchProducts } = useProductStore();
  return (
    <div className='flex flex-row p-4'>
      <input
        type='text'
        name='search'
        className='border rounded-full w-full border-indigo-600 p-2'
        placeholder='Search product...'
        onChange={e => searchProducts(e.target.value)}
      />
    </div>
  );
};
