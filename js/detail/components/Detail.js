/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export default class Detail extends Component {
  render() {
      let {dataSource} = this.props;
    return (
        <View style={styles.container}>
            <Text style={styles.tipMessage}>
            {dataSource.get('tip')}
            </Text>
        </View>
    );
  }
}
let {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipMessage:{
        fontSize: 24,
        color: '#444444',
    },
});
