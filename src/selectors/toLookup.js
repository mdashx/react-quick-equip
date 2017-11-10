import { createSelector } from 'reselect';

export const selectToLookup = (state) => state.toLookup;

export const makeSelectUsernames = () => createSelector(
  [selectToLookup],
  toLookupState => toLookupState.get('usernames')
); 

export const makeSelectCurrentUsername = () => createSelector(
  [selectToLookup],
  toLookupState => toLookupState.get('currentUsername')
);


  
