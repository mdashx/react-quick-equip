import { createSelector } from 'reselect';

export const selectState = state => state;

export const selectAll = () => createSelector([selectState], state => state);
