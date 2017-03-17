/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {Provider} from 'react-redux';
import configureStore from './home/store/configureStore';

import Home from './home/Home';

export default class LearnDayByDay extends Component {
  render() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
  }
}
