import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  //store.dispatch();

  return store;
}

export default configureStore;