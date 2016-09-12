import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(this.props.state.quotes.data)
    };
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={`${sectionID}-${rowID}`} style={{ borderWidth: 0.5, borderBottomColor: 'pink' }}></View>
    );
  }

  _renderListItems(item) {
    return (
      <View style={{ flexDirection: 'column', backgroundColor: '#F5FCFF', padding: 10 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={ styles.title }>
              { item.symbol }
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22 }}>
              { item.closingPrice }
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>
              { item.changeInPercent }
            </Text>
            <Text>
              { item.changeInValue }
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text>
            { item.name }
          </Text>
        </View>
      </View>
    );
  }

  render() {
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
  title: {
    fontSize: 16,
    marginBottom: 8
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default List;