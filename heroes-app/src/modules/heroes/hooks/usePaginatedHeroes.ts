import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getHeroesByPageAction } from '../actions/get-heroes-by-page.action';

export const usePaginatedHeroes = (
  page: number,
  limit: number,
  category = 'all'
) => {
  const queryClient = useQueryClient();

  const paginatedHeroes = useQuery({
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () => getHeroesByPageAction(page, limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  useEffect(() => {
    const newPage = page + 1;

    if (newPage <= (paginatedHeroes.data?.pages ?? 0)) {
      queryClient.prefetchQuery({
        queryKey: ['heroes', { page: newPage, limit, category }],
        queryFn: () => getHeroesByPageAction(page + 1, limit, category),
        staleTime: 1000 * 60 * 5, // 5 minutos
      });
    }
  }, [
    page,
    limit,
    category,
    queryClient,
    paginatedHeroes.data?.pages,
    paginatedHeroes.isFetching,
  ]);

  return {
    paginatedHeroes,
  };
};
