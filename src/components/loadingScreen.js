import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

class LoadingScreen extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator
          animating={ true }
          size="large"
        />
        <Text style={ styles.welcome }>
          Loading lots of data ...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default LoadingScreen;