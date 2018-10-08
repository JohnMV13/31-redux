import { combineReducers } from 'redux';

import businesses from './business-reducer';
import games from './game-reducer';

export default combineReducers({
  businesses,
  games,
});
