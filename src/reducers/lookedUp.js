import { fromJS } from 'immutable';

import { LOOKUP_USERNAME } from 'containers/LookupUsers/constants';

const initialState = fromJS({
  history: [],
});

const lookedUp = (state = initialState, action) => {
  switch (action.type) {
    case LOOKUP_USERNAME:
      return state.updateIn(['history'], list => list.push(action.username));
    default:
      return state;
  }
}

export default lookedUp;
