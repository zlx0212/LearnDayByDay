import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

export default class Detail extends Component {

    render() {
        let {data,rowID} = this.props;
    return (
        <View style={styles.container}>

        <Image style={styles.icon} source={require('../images/01.png')}/>

        <Text>
            {data.get('text')} -- {rowID}
        </Text>
        </View>
    );
  }
}
let {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
    },
    tipMessage:{
        fontSize: 24,
        color: '#444444',
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 15,
        marginTop: 5,
        marginRight: 5,
    }
});
