import { useEffect } from 'react';
import { useCategoryStore } from '../../store/category';
import { useProductStore } from '../../store/product';
import { formatText } from '../../utils/formatText';

export const CategoriesList = () => {
  const { categoryNamesList, getCategoryNamesList } = useCategoryStore();
  const { getProductsByCategory } = useProductStore();

  useEffect(() => {
    getCategoryNamesList();
  }, [getCategoryNamesList]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row'>
        <h2 className='text-lg font-bold p-2 border-b'>Categories</h2>
      </div>
      <ul>
        {categoryNamesList?.map((category: string) => (
          <li key={category} value={category} onClick={() => getProductsByCategory(category)} className='hover:text-indigo-500 hover:font-bold'>
            {formatText(category)}
          </li>
        ))}
      </ul>
    </div>
  );
};
