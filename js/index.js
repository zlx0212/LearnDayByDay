/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './home/store/configureStore';
import homeInitialState from './home/reducers/homeInitialState';

import Home from './home/Home';

export default class LearnDayByDay extends Component {
  render() {
    const store = configureStore({home:(new homeInitialState())});
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('LearnDayByDay', () => LearnDayByDay);
