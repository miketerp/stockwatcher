import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
import { fetchQuotes } from '../actions/actions';

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  store.dispatch(fetchQuotes());

  return store;
}

export default configureStore;