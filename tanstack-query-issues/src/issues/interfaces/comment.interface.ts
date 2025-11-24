export interface GithubComment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  body: string;
  author_association: string;
  reactions: Reactions;
  performed_via_github_app: PerformedViaGithubApp | null;
}

interface PerformedViaGithubApp {
  id: number;
  client_id: string;
  slug: string;
  node_id: string;
  owner: User;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions;
  events: string[];
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

interface Permissions {
  actions: string;
  administration: string;
  artifact_metadata: string;
  attestations: string;
  checks: string;
  contents: string;
  deployments: string;
  discussions: string;
  issues: string;
  merge_queues: string;
  metadata: string;
  models: string;
  packages: string;
  pages: string;
  pull_requests: string;
  repository_hooks: string;
  repository_projects: string;
  security_events: string;
  statuses: string;
  vulnerability_alerts: string;
}

interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
