import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductStore } from '../../store/product';

export const Search = () => {
  const { searchProducts, searchTerm } = useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlsearchTerm = searchParams.get('search') || '';
    if (urlsearchTerm && urlsearchTerm !== searchTerm) {
      searchProducts(urlsearchTerm);
    }
  }, [searchProducts, searchParams, searchTerm]);

  const handleChange = (value: string) => {
    searchProducts(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className='flex flex-row p-4'>
      <input
        type='text'
        name='search'
        className='border rounded-full w-full border-indigo-600 p-2'
        placeholder='Search product...'
        value={searchTerm || ''}
        onChange={e => {
          handleChange(e.currentTarget.value);
        }}
      />
    </div>
  );
};
