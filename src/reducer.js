import {
  ADD_USER_TO_LIST,
  UPDATE_USERNAME,
} from 'appConstants';

const initialState = {
  currentUsername: '',
  usernames: [],
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, {
        currentUsername: action.username,
      });
    case ADD_USER_TO_LIST:
      return Object.assign({}, state, {
        currentUsername: '',
        usernames: [...state.usernames, state.currentUsername],
      });
    default:
      return state
  }
}
