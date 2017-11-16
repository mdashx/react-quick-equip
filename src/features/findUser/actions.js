import {
  ADD_USER_TO_LIST,
  UPDATE_USERNAME,
} from './constants';

export function addUser(username) {
  return {
    type: ADD_USER_TO_LIST,
    username,
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username,
  }
}
