import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FiSkipBack } from "react-icons/fi";
import { useIssue } from "../hooks";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";
import { IssueComment } from "../components/IssueComment";
import { GithubComment } from "../interfaces";

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const issueNumber = Number(params.issueNumber ?? 0);

  const { issueQuery, issueCommentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) {
    return <LoadingSpinner />;
  }

  if (!issueQuery.data) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      <IssueComment comment={issueQuery.data as unknown as GithubComment} />

      {issueCommentsQuery.isLoading && <LoadingSpinner />}

      {issueCommentsQuery.data?.map((comment) => (
        <IssueComment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
