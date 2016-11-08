import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions/actions'

import AppNavigator from './AppNavigator';
import LoadingScreen from './components/loadingScreen';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.state.quotes.status === 'busy') {
      return (
        <LoadingScreen
          text="loading ..."
        />
      );
    }

    const { state } = this.props;

    return (
      <AppNavigator
        state={ state }
        {...actions}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);