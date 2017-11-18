import { createSelector } from 'reselect';

export const selectFindUser = state => state.findUser;

export const makeSelectUsernames = () =>
  createSelector([state => selectFindUser(state)], findUserState =>
    findUserState.get('usernames')
  );

export const makeSelectCurrentUsername = () =>
  createSelector([state => selectFindUser(state)], findUserState =>
    findUserState.get('currentUsername')
  );
