export enum RepoName {
  SWOPPY_SPACE = "swoppy-space",
  ZCASH_HALVING = "zcash-halving",
  TWIT_BOT = "zcash-halving-twit-bot",
  EXPERIMENT_REPO = "website-v1",
}

export enum RepoKey {
  NAME = "name",
  DESCRIPTION = "description",
  REPO_LINK = "html_url",
  PROJECT_LINK = "homepage",
  LANG = "language",
}

export type RepoProps = {
  name: string | null
  description: string | null
  html_url: string | null
  homepage?: string | null
  language: string | null
}

export const allowedRepo: RepoName[] = [
  RepoName.EXPERIMENT_REPO,
  RepoName.ZCASH_HALVING,
  RepoName.TWIT_BOT,
  RepoName.SWOPPY_SPACE,
]

const allowedProps: RepoKey[] = [
  RepoKey.DESCRIPTION,
  RepoKey.LANG,
  RepoKey.NAME,
  RepoKey.PROJECT_LINK,
  RepoKey.REPO_LINK,
]

export const githubFetchRepo = async () => {
  const request = await fetch(`https://api.github.com/users/swoppy/repos`)
  const response = await request.json()
  return response
}
