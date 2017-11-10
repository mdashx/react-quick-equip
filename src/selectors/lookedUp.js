import { createSelector } from 'reselect';

export const selectLookedUp = (state) => state.lookedUp;

export const makeSelectHistory = () => createSelector(
  [selectLookedUp],
  lookedUpState => lookedUpState.get('history')
);

