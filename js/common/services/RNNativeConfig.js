'use strict';

import {NativeModules} from 'react-native';

let RNNativeConfig = NativeModules.RNNativeConfig;

/**
 *
 * 获取接口加签用的key
 *
 */
function getPrivateKey() {
    return RNNativeConfig.privateKey;
}

module.exports = {
    getPrivateKey,
};
