// @flow

import { ADD_USER_TO_LIST, UPDATE_USERNAME } from './constants';

type AddUserAction = { type: ADD_USER_TO_LIST, username: string };
type UpdateUsernameAction = { type: UPDATE_USERNAME, username: string };

export type Action =
  | AddUserAction
  | UpdateUsernameAction;

export function addUser(username: string): AddUserAction {
  return {
    type: ADD_USER_TO_LIST,
    username,
  };
}

export function updateUsername(username: string): UpdateUsernameAction {
  return {
    type: UPDATE_USERNAME,
    username,
  };
}
