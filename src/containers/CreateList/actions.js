import {
  ADD_USER_TO_LIST,
  UPDATE_USERNAME,
  DNE,
} from './constants';

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username,
  }
}

export function addUser() {
  return {
    type: ADD_USER_TO_LIST,
  }
}
