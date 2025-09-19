import { useProductStore } from '../../store/product';

export const Pagination = () => {
  const { totalPages, currentPage, setPage } = useProductStore();

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className='flex justify-center items-center gap-2 my-4'>
      {/* Prev button */}
      <button
        className='w-24 p-4 rounded bg-indigo-300 hover:border hover:bg-indigo-400 disabled:opacity-50'
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          className={`w-12 p-2 rounded ${page === currentPage ? 'bg-indigo-600 text-white' : 'bg-indigo-300 hover:border hover:bg-indigo-400'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        className='w-24 p-4 rounded bg-indigo-300 hover:border hover:bg-indigo-400 disabled:opacity-50'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
