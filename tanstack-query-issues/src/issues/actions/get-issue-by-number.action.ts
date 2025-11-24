import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces";

export const getIssueByNumber = async (issueNumber: number): Promise<GithubIssue> => {
  await sleep(2);
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);

  return data;
};
