import { useQuery } from "@tanstack/react-query";
import { getIssueByNumber, getIssueComments } from "../actions";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueByNumber(issueNumber),
    staleTime: 1000 * 60,
    retry: false,

    // Only fetch if is a valid number
    enabled: !!issueNumber,
  });

  const issueCommentsQuery = useQuery({
    queryKey: ["issue", "comments", issueNumber],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 1000 * 60,
    retry: false,

    // Only fetch if is a valid number
    enabled: !!issueNumber,
  });

  return { issueQuery, issueCommentsQuery };
};
