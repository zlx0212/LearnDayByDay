'use strict';

import ReactNative from 'react-native';

const {
	SET_PLATFORM,
	SET_CHANNEL,
    SET_HOST,
    SET_SERVICE_HOST,
    SET_AB_VERSION,
} = require('../../constants/actionTypes').default;

export function setPlatform(platform) {
    return {
        type: SET_PLATFORM,
        payload: platform
    };
}

export function setChannel(channel) {
    return {
        type: SET_CHANNEL,
        payload: channel
    };
}

export function setHost(host) {
    return {
        type: SET_HOST,
        payload: host
    };
}

export function setServiceHost(host) {
    return {
        type: SET_SERVICE_HOST,
        payload: host
    };
}

export function setABVersion(version) {
    return {
        type: SET_AB_VERSION,
        payload: version
    };
}
