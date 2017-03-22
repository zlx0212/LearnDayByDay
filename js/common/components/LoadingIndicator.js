'use strict';

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    Platform,
} from 'react-native';

export default class LoadingIndicator extends Component {

    static propTypes = {
        isVisible: React.PropTypes.bool.isRequired,
        size: React.PropTypes.string,
        color: React.PropTypes.string,
        overlayWidth: React.PropTypes.number,
        overlayHeight: React.PropTypes.number,
        overlayColor: React.PropTypes.string,
        text: React.PropTypes.string,
        textColor: React.PropTypes.string,
        textFontSize: React.PropTypes.number,
    };

    static defaultProps = {
        isDismissible: false,
        overlayWidth: 100,
        overlayHeight: 100,
        overlayColor: 'rgba(0,0,0,0.6)',
        size: (Platform.OS === 'ios') ? 'large' : 'small',
        color: (Platform.OS === 'ios') ? 'white' : 'gray',
        text: '加载中...',
        textColor: '#eeeeee',
        textFontSize: 12,
    };

    render() {

        if (!this.props.isVisible) {
            return null;
        }

        let customStyles = StyleSheet.create({
            overlay: {
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: this.props.overlayColor,
                width: this.props.overlayWidth,
                height: this.props.overlayHeight,
            },
            text: {
                color: this.props.textColor,
                fontSize: this.props.textFontSize,
                marginTop: 8,
            },
        });

        return (
            <View style={styles.container}>
                <View style={customStyles.overlay}>
                    <ActivityIndicator color={this.props.color} size={this.props.size}/>
                    <Text style={customStyles.text}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

let {width, height} = Dimensions.get('window');
let navbarHeight = (Platform.OS === 'android') ? 50 : 64;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        top: -navbarHeight,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
