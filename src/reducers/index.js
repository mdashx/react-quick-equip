import { combineReducers } from 'redux';

import toLookup from './toLookup';
import lookedUp from './lookedUp';

export default combineReducers({
  toLookup,
  lookedUp,
});
