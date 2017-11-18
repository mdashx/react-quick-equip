import { fromJS } from 'immutable';

import {
  LOOKUP_USERNAME,
  UPDATE_USERNAME_REPOS,
  SELECT_USER,
} from './constants';

const initialState = fromJS({
  history: [],
  foundRepos: {},
  selectedUser: '',
});

const foundUser = (state = initialState, action) => {
  switch (action.type) {
    case LOOKUP_USERNAME:
      return state.updateIn(['history'], list => list.unshift(action.username));
    case SELECT_USER:
      return state.set('selectedUser', action.username);
    case UPDATE_USERNAME_REPOS:
      return state.updateIn(['foundRepos'], map =>
        map.set(action.username, action.repos)
      );
    default:
      return state;
  }
};

export default foundUser;
