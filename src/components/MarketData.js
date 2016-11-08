import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import {
  Text,
  View,
  StyleSheet
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
        <View key={ key } style={ styles.marketCells }>
          <View style={ styleTag }>
            <Text style={ styles.marketFontStandard }>
              { val.Symbol }
            </Text>
            <Text style={ styles.marketFontStandard }>
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
      <View style={ styles.marketMain }>
        { this._renderMarketValues(state.market.data) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marketCells: {
    flex: 1,
    padding: 10
  },
  marketFontStandard: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  marketMain: {
    flexDirection: 'row',
    padding: 10
  }
});

export default MarketData;