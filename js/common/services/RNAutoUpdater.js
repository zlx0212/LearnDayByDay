'use strict';

import {NativeModules} from 'react-native';

let RNAutoUpdater = NativeModules.RNAutoUpdater;

const INSTALL_MODE_IMMEDIATE = 1;       //立即加载
const INSTALL_MODE_ON_NEXT_START = 2;   //下次重新启动时加载
const INSTALL_MODE_ON_NEXT_RESUME = 3;  //下次进入前台时加载

function checkUpdate(options) {
    let default = {
        installMode: INSTALL_MODE_ON_NEXT_RESUME,
    };
    options = {
        ...default,
        ...options
    }

    RNAutoUpdater.checkUpdate(options);

}

function jsBundleVersion() {
    return RNAutoUpdater.jsBundleVersion;
}

module.exports = {
    checkUpdate,
    jsBundleVersion,
};
