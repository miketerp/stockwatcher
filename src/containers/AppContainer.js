import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  View,
} from 'react-native';

import GenerateList from '../components/StocksList';
import MarketData from '../components/MarketData';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      state,
      actions
    } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <MarketData
          state={ state }
          {...actions}
        />
        <GenerateList
          state={ state }
          {...actions}
        />
      </View>
    );
  }
}

export default AppContainer;