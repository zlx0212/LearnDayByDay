/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import homeInitialState from './reducers/homeInitialState';

import HomeContainer from './container/HomeContainer';

export default class Home extends Component {
  render() {
    const store = configureStore({home:(new homeInitialState())});
    return (
        <Provider store={store}>
            <HomeContainer/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
