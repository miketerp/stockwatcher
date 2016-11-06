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
        <Text style={{ fontSize: 20, color: 'white', textAlign: 'right', paddingRight: 7.5 }}>
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
    console.log('herp');
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={`${sectionID}-${rowID}`}></View>
    );
  }

  _renderListItems(item) {
    return (
      <TouchableOpacity activeOpacity={ 0.6 } onPress={() => _this._showRanges()}>
        <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15 }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 3, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                <Text style={{ color: 'black', fontSize: 20, paddingBottom: 15 }}>
                  { item.symbol }
                </Text>
              </View>

              <View style={{ flex: 2, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'right', paddingRight: 10 }}>
                  { util.truncatePrice(item.closingPrice) }
                </Text>
              </View>

              <RenderChangePercentage item={ item }></RenderChangePercentage>
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
});

export default List;