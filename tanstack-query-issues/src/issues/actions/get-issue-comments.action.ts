import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubComment } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number,
): Promise<GithubComment[]> => {
  await sleep(2);
  const { data } = await githubApi.get<GithubComment[]>(
    `/issues/${issueNumber}/comments`,
  );

  return data;
};
