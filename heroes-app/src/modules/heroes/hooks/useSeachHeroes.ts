import { useQuery } from '@tanstack/react-query';
import {
  searchHeroesAction,
  type Options as searchHeroesActionOptions,
} from '../actions/search-heroes.action';

export const useSearchHeroes = (options: searchHeroesActionOptions) => {
  const searchHeroes = useQuery({
    queryKey: ['search-heroes', { ...options }],
    queryFn: () => searchHeroesAction(options),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return {
    searchHeroes,
  };
};
