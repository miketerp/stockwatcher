import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './main';

import createStore from './stores/configureStore';

const store = createStore();

class Main extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}

export default Main;