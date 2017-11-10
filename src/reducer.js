import { fromJS } from 'immutable';

import {
  ADD_USER_TO_LIST,
  UPDATE_USERNAME,
} from 'containers/CreateList/constants';

import { LOOKUP_USERNAME } from 'containers/LookupUsers/constants';

const initialState = fromJS({
  currentUsername: '',
  usernames: [],
  history: [],
});

export function rootReducer(state = initialState, action) {
  let updatedState
  switch (action.type) {
    case UPDATE_USERNAME:
      return state.set('currentUsername', action.username);
    case ADD_USER_TO_LIST:
      updatedState = state.updateIn(['usernames'], list => list.push(state.get('currentUsername')));
      return updatedState.set('currentUsername', '');
    case LOOKUP_USERNAME:
      updatedState = state.updateIn(['usernames'], list => list.filter(username => username !== action.username))
      return updatedState.updateIn(['history'], list => list.push(action.username));
    default:
      return state;
  }
}
