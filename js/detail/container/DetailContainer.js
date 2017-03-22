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
        this._onRefresh = this._onRefresh.bind(this);
        this._fetachMoreList = this._fetachMoreList.bind(this);
    }

    componentWillMount() {
        this.props.actions.refreshList();
    }

    _fetachMoreList() {
        this.props.actions.fetchCellList();
    }

    _onRefresh() {
        this.props.actions.refreshList();
    }

    render() {
        let {detail} = this.props;
        return (
            <Detail
                detailPageInfo={detail}
                onRefresh={this._onRefresh}
                fetachMoreList={this._fetachMoreList}
            />
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailContainer);
