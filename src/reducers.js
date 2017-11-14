import { combineReducers } from 'redux';

import findUser from 'features/findUser/reducer';
import foundUser from 'features/foundUser/reducer';

export default combineReducers({
  findUser,
  foundUser,
});
