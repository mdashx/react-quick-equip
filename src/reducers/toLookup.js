import { fromJS } from 'immutable';

import { ADD_USER_TO_LIST, UPDATE_USERNAME } from 'containers/CreateList/constants';
import { LOOKUP_USERNAME } from 'containers/LookupUsers/constants';

const initialState = fromJS({
  currentUsername: '',
  usernames: [],
});

const toLookup = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return state.set('currentUsername', action.username);
    case ADD_USER_TO_LIST:
      return state.withMutations(map => {
        map.updateIn(['usernames'], list => list.push(state.get('currentUsername')));
        map.set('currentUsername', '');
      });
    case LOOKUP_USERNAME:
      return state.withMutations(map => {
        map.updateIn(['usernames'], list => list.filter(username => username !== action.username));
        map.set('currentUsername', action.username);
      });
      
    default:
      return state;
  }
}

export default toLookup;
