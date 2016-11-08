import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';

import util from '../utils/filters';

class RenderChangePercentage extends Component {
  constructor(props) {
    super(props);
  }

  _renderPercentageBox(val) {
    var styleTag = {
      backgroundColor: 'red'
    };

    if( parseFloat(val) > 0 ) {
      styleTag.backgroundColor = '#12B741';
    }

    return (
      <View style={ styleTag }>
        <Text style={ styles.percentageBox }>
          { val }
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 2 }}>
        { this._renderPercentageBox(util.truncatePercent(this.props.item.changeInPercent)) }
      </View>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(this.props.state.quotes.data)
    };
  }

  _showRanges() {
    // TODO: will very soon add dayRanges and yearRanges with graph.
    //console.log('herp & derp');
    return;
  }

  //_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
  //  return (
  //    <View key={`${sectionID}-${rowID}`}></View>
  //  );
  //}

  _renderListItems(item) {
    return (
      <TouchableOpacity activeOpacity={ 0.6 } onPress={() => _this._showRanges()}>
        <View style={ styles.tickerParentBox }>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={ styles.tickerSymbolContainer }>
                <Text style={ styles.tickerSymbolTextStyle }>
                  { item.symbol }
                </Text>
              </View>

              <View style={ styles.tickerPriceContainer }>
                <Text style={ styles.tickerPriceTextStyle }>
                  { util.truncatePrice(item.closingPrice) }
                </Text>
              </View>

              <RenderChangePercentage
                item={ item }
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: 'black' }}>
                { item.name }
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    _this = this;

    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this._renderListItems }
        renderSeparator={ this._renderSeparator }
      />
    );
  }
}

const styles = StyleSheet.create({
  tickerParentBox: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  tickerSymbolContainer: {
    flex: 3,
    borderTopColor: 'grey',
    borderTopWidth: 0.5
  },
  tickerSymbolTextStyle: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 15
  },
  tickerPriceContainer: {
    flex: 2,
    borderTopColor: 'grey',
    borderTopWidth: 0.5
  },
  tickerPriceTextStyle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 10
  },
  percentageBox: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    paddingRight: 7.5
  }
});

export default List;