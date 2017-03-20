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

import * as homeActions from '../reducers/homeActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../components/Home';
import {Map} from 'immutable';

const actions = [
    homeActions,
];

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {

    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();

    return {
        actions: bindActionCreators(creators, dispatch),
        dispatch
    };
}

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this._readyAction = this._readyAction.bind(this);
    }

    _readyAction() {
        this.props.actions.readyAction();
    }

    render() {
        let {home} = this.props;
        return (
            <Home
                dataSource={home}
                readyAction={this._readyAction}
            />
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
