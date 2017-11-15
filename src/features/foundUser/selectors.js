import { createSelector } from 'reselect';

export const selectFoundUser = state => state.foundUser;

export const makeMostRecentRepos = () => createSelector(
  [selectFoundUser],
  foundUserState => {
    const user = foundUserState.getIn(['history', 0])
    return foundUserState.getIn(['foundRepos', user])
  }
);

export const makeMostRecentUser = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.getIn(['history', 0])
);

export const makeSelectHistory = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.get('history')
);

export const makeFoundRepos = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.get('foundRepos')
);

export const makeSelectedUser = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.get('selectedUser')
)

export const makeSelectedRepos = () => createSelector(
  [makeFoundRepos(), makeSelectedUser()],
  (repos, user) => repos.get(user)
);
