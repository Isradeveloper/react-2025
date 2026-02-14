import { useQuery } from '@tanstack/react-query';
import { getSummaryAction } from '../actions/get-summary.action';

export const useHeroesSummary = () => {
  const { data: summary, isFetching } = useQuery({
    queryKey: ['heroes-summary'],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    summary,
    isFetching,
  };
};
