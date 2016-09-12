import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import GenerateList from './components/StocksList';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      state,
      actions
    } = this.props;

    return (
      <GenerateList
        state={ state }
        {...actions}
      />
    );
  }
}

export default Main;