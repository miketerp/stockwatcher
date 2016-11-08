import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import {
  Text,
  View,
} from 'react-native';

class MarketData extends Component {
  constructor(props) {
    super(props);
  }

  _renderMarketValues(list) {
    return list.map(function(val, key) {
      var styleTag = {
        borderTopWidth: 4,
        borderColor: 'red'
      };

      var fontTag = {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
      };

      if (parseFloat(val.ChangeinPercent) > 0) {
        styleTag.borderColor = '#12B741';
        fontTag.color = '#12B741';
      }

      return (
        <View key={ key } style={{ flex: 1, padding: 10 }}>
          <View style={ styleTag }>
            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
              { val.Symbol }
            </Text>
            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
              { val.PreviousClose }
            </Text>
            <Text style={ fontTag }>
              { val.ChangeinPercent }
            </Text>
          </View>
        </View>
      )
    });
  }

  render() {
    const {
      state,
      actions
    } = this.props;

    return (
      <View style={{ flexDirection: 'row', padding: 10 }}>
        { this._renderMarketValues(state.market.data) }
      </View>
    );
  }
}

export default MarketData;