import { ChevronLeft, MoreHorizontal, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useQueryParams } from '@/hooks/useQueryParams';

interface props {
  totalPages: number;
}

const PAGES_WITHOUT_ELLIPSIS = 6;

export const CustomPagination = ({ totalPages }: props) => {
  const { page: queryPage, handleSetSearchParams } = useQueryParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    handleSetSearchParams([{ key: 'page', value: page.toString() }]);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={queryPage === 1}
        onClick={() => handlePageChange(queryPage - 1)}>
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {(() => {
        const showAll = totalPages <= PAGES_WITHOUT_ELLIPSIS;
        const firstThree = [1, 2, 3].filter((p) => p <= totalPages);
        const lastThree = [totalPages - 2, totalPages - 1, totalPages].filter(
          (p) => p >= 1
        );
        const pageNumbers: (number | 'ellipsis')[] = showAll
          ? Array.from({ length: totalPages }, (_, i) => i + 1)
          : [
              ...firstThree,
              ...(lastThree.length > 0 &&
              firstThree.length > 0 &&
              lastThree[0] > firstThree[firstThree.length - 1] + 1
                ? (['ellipsis'] as const)
                : []),
              ...lastThree.filter((p) => !firstThree.includes(p)),
            ];

        return pageNumbers.map((item) =>
          item === 'ellipsis' ? (
            <Button
              key="ellipsis"
              variant="ghost"
              size="sm"
              disabled
              className="pointer-events-none">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              key={item}
              variant={queryPage === item ? 'default' : 'outline'}
              size="sm"
              onClick={() => handlePageChange(item)}
              disabled={queryPage === item}>
              {item}
            </Button>
          )
        );
      })()}

      <Button
        variant="outline"
        size="sm"
        disabled={queryPage === totalPages}
        onClick={() => handlePageChange(queryPage + 1)}>
        <ChevronRight className="h-4 w-4" />
        Next
      </Button>
    </div>
  );
};
