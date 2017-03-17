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

export default class LearnDayByDay extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.entry}>
                <Text style={styles.entryText} onPress={() => {
                    console.log('clicked me');
                }}>
                    Home page hah
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
    entry: {
        width: 200,
        height: 66,
        borderRadius: 5,
        backgroundColor: '#444444',
    },
    entryText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        lineHeight: 66,
        backgroundColor: 'transparent'
    }
});

AppRegistry.registerComponent('LearnDayByDay', () => LearnDayByDay);
