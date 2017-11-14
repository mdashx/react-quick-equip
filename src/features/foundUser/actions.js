import { LOOKUP_USERNAME, UPDATE_USERNAME_REPOS } from './constants';

export function lookupUsername(username) {
  return {
    type: LOOKUP_USERNAME,
    username,
  }
}

export function updateUsernameRepos(username, repos) {
  return {
    type: UPDATE_USERNAME_REPOS,
    username,
    repos
  }
}
