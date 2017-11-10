import { LOOKUP_USERNAME } from './constants';

export function lookupUsername(username) {
  return {
    type: LOOKUP_USERNAME,
    username,
  }
}
