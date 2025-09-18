import { useEffect } from 'react';
import { useCategoryStore } from '../../store/category';

export const CategoriesList = () => {
  const { categoryNamesList, getCategoryNamesList } = useCategoryStore();

  useEffect(() => {
    getCategoryNamesList();
  }, [categoryNamesList]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row'>
        <h2 className='text-lg font-bold p-2 border-b'>Categories</h2>
      </div>
      <ul>
        {categoryNamesList?.map((category: string) => (
          <li key={category}>{category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}</li>
        ))}
      </ul>
    </div>
  );
};
