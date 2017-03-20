/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import detailInitialState from './reducers/detail/detailInitialState';

import DetailContainer from './container/DetailContainer';

export default class Detail extends Component {
  render() {
    const store = configureStore({detail:(new detailInitialState())});
    return (
        <Provider store={store}>
            <DetailContainer/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('Detail', () => Detail);
