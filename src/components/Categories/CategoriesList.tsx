import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCategoryStore } from '../../store/category';
import { useProductStore } from '../../store/product';
import { formatText } from '../../utils/formatText';

export const CategoriesList = () => {
  const { categoryNamesList, getCategoryNamesList } = useCategoryStore();
  const { getProductsByCategory } = useProductStore();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCategoryNamesList();
  }, [getCategoryNamesList]);

  const handleClick = (category: string) => {
    getProductsByCategory(category);

    const params = new URLSearchParams(searchParams);
    params.set('category', category);
    setSearchParams(params);
  };

  return (
    <div className='flex flex-col gap-2 p-4'>
      <div className='flex flex-row'>
        <h2 className='text-lg font-bold p-2 border-b'>Categories</h2>
      </div>
      <ul>
        {categoryNamesList?.map((category: string) => (
          <li key={category} onClick={() => handleClick(category)} className='hover:text-indigo-500 hover:font-bold cursor-pointer'>
            {formatText(category)}
          </li>
        ))}
      </ul>
    </div>
  );
};
