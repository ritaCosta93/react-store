type PaginationProps = {
  total?: number | null;
  skip?: number | null;
  limit: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ total, skip = 0, limit = 10, onPageChange }: PaginationProps) => {
  const safeTotal = total ?? 0;
  const safeSkip = skip ?? 0;

  const currentPage = limit > 0 ? Math.floor(safeSkip / limit) + 1 : 1;
  const totalPages = limit > 0 ? Math.ceil(safeTotal / limit) : 1;

  if (totalPages <= 1) return null;

  return (
    <div className='flex justify-center items-center gap-2 my-4 w-28'>
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
        <button key={page} className='w-24 p-4 rounded bg-indigo-300 hover:border hover:bg-indigo-400' onClick={() => onPageChange(page)}>
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
