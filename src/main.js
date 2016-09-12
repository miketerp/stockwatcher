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
    state: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);