import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Container from './containers/AppContainer';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: this will eventually have a navigator to push and pop screens
  render() {
    const {
      state,
      actions
    } = this.props;

    return (
      <Container
        state={ state }
        {...actions}
      />
    );
  }
}

export default Main;