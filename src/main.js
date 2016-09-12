import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actions from './actions/actions'

import AppNavigator from './AppNavigator';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;

    return (
      <AppNavigator
        state={ state }
        {...actions}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);