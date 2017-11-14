import { createSelector } from 'reselect';

export const selectFoundUser = state => state.foundUser;

export const makeMostRecentUser = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.getIn(['history', 0])
);

export const makeSelectHistory = () => createSelector(
  [selectFoundUser],
  foundUserState => foundUserState.get('history')
);
