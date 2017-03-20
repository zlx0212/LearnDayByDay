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

import * as detailActions from '../reducers/detail/detailActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Detail from '../components/Detail';
import {Map} from 'immutable';

const actions = [
    detailActions,
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

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this._readyAction = this._readyAction.bind(this);
    }

    _readyAction() {
        this.props.actions.readyAction();
    }

    render() {
        let {detail} = this.props;
        return (
            <Detail
                dataSource={detail}
                readyAction={this._readyAction}
            />
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailContainer);
