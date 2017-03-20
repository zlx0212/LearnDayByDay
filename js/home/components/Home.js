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

export default class Home extends Component {
  render() {
      let {dataSource} = this.props;
    return (
        <View style={styles.container}>
            <Text style={styles.tipMessage}>
            {dataSource.get('tip')}
            </Text>
            <View style={styles.entry}>
                <Text style={styles.entryText} onPress={() => {
                    this.props.readyAction && this.props.readyAction();
                }}>
                    {dataSource.get('homeBtnText')}
                </Text>
            </View>
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
    entry: {
        width: 200,
        height: 66,
        borderRadius: 5,
        backgroundColor: '#444444',
        marginTop: 50,
    },
    entryText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        lineHeight: 66,
        backgroundColor: 'transparent'
    }
});
