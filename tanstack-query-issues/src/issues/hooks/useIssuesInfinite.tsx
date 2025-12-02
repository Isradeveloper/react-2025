import { useInfiniteQuery } from "@tanstack/react-query";
import { State } from "../interfaces";
import { getIssues } from "../actions";

interface UseIssuesInfiniteProps {
  state: State;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({
  state,
  selectedLabels,
}: UseIssuesInfiniteProps) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: [
      "infinite",
      "facebook",
      "react",
      "issues",
      { state, selectedLabels },
    ],
    queryFn: ({ pageParam, queryKey }) => {
      const [, , , , args] = queryKey;

      const { state, selectedLabels } = args as UseIssuesInfiniteProps;

      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 1000 * 60,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });

  return { issuesQuery };
};
