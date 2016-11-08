import { combineReducers } from 'redux';

import quotes from './quotes';
import market from './market';

export default combineReducers({
  quotes,
  market
});