/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    RefreshControl,
    InteractionManager,
} from 'react-native';
import Immutable, {Map,Record,List} from 'immutable';
import LoadingIndicator from '../../common/components/LoadingIndicator';
import DetailCell from './DetailCell';

export default class Detail extends Component {
    constructor(props) {
            super(props);
            this._renderRow = this._renderRow.bind(this);
            this._renderSeparator = this._renderSeparator.bind(this);
            this._renderHeader = this._renderHeader.bind(this);
            this._renderFooter = this._renderFooter.bind(this);
            this._onRefresh = this._onRefresh.bind(this);
            this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => !Immutable.is(r1, r2),
        });
        this.state = {
            isRefreshing: false,
        }
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <DetailCell
                key={'row' + rowID}
                rowID={rowID}
                data={rowData}
                onPressProduct={this.props.onPressCell}
            />
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={'sep' + rowID} style={styles.separator}>
            </View>
        );
    }

    _renderHeader() {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Pull to refresh!</Text>
            </View>
        );
    }

    _renderFooter() {
        let {cellListComponent} = this.props;
        let {curpage, totalPage} = cellListComponent;
        let footerText = 'load more';
        if (curpage == totalPage) {
            footerText = 'no more ...';
        }
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{footerText}</Text>
            </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        this.props.onRefresh && this.props.onRefresh();
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 3000);
    }

    render() {
        let {cellListComponent} = this.props;
        let {isFetching, cellList} = cellListComponent;
        let dataSource = cellList?cellList.toArray():[];
        return (
            <View style={styles.container}>
            {dataSource.length?
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#000000"
                            title="Loading..."
                            titleColor="#000000"
                            colors={['#f0f0f0', '#444444', '#000000']}
                            progressBackgroundColor="#444444"
                        />
                    }
                    contentContainerStyle={styles.contentContainer}
                    enableEmptySections={true}
                    dataSource={this.dataSource.cloneWithRows(dataSource)}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeparator}
                    renderFooter={this._renderFooter}
                    renderHeader={this._renderHeader}
                    onEndReached={() => {
                        if (cellList && cellList.size && !this.state.isRefreshing) {
                            this.props.fetachMoreList && this.props.fetachMoreList();
                        }
                    }}
                />
                :null
            }

                <LoadingIndicator
                    isVisible={isFetching}
                />
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
    separator: {
        width: width,
        height: 0.5,
        backgroundColor: '#e5e5e5',
    },
    footerContainer: {
        width: width,
        height: 50,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    footerText: {
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 20,
        color: '#444444',
    },
});
