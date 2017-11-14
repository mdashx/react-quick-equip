import { createSelector } from 'reselect';

export const selectFindUser = (state) => state.findUser;

export const makeSelectUsernames = () => createSelector(
  [selectFindUser],
  findUserState => findUserState.get('usernames')
); 

export const makeSelectCurrentUsername = () => createSelector(
  [selectFindUser],
  findUserState => findUserState.get('currentUsername')
);


  
