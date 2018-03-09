// @flow

import { fromJS } from 'immutable';
import type { Map } from 'immutable';

import { ADD_USER_TO_LIST, UPDATE_USERNAME } from './constants';
import { LOOKUP_USERNAME } from 'features/foundUser/constants';
import type { Action } from './actions';

type State = Map;

export const initialState = fromJS({
  currentUsername: '',
  usernames: [],
});

const findUser = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return state.set('currentUsername', action.username);
    case ADD_USER_TO_LIST:
      return state.withMutations(map => {
        map.updateIn(['usernames'], list => list.push(action.username));
        map.set('currentUsername', '');
      });
    case LOOKUP_USERNAME:
      return state.updateIn(['usernames'], list =>
        list.filter(username => username !== action.username)
      );
    default:
      return state;
  }
};

export default findUser;
