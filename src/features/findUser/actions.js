import {
  ADD_USER_TO_LIST,
  UPDATE_USERNAME,
} from './constants';

export function addUser() {
  return {
    type: ADD_USER_TO_LIST,
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username,
  }
}
