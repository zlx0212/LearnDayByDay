'use strict';

import NativeRequest from './NativeRequest';
import Request from './Request';
import ReactNative, {Platform, Dimensions} from 'react-native';

export default class RNRequest {

	constructor(baseURL) {

		if (Platform.OS === 'ios') {
			this.api = new NativeRequest(baseURL);
		}else {
			this.api = new Request(baseURL);
		}

	}

	async get(opts) {
		return await this.api.get(opts)
		.then((json) => {
			return json;
		})
		.catch((error) => {
			throw(error);
		});
	}

	async post(opts) {
		return await this.api.post(opts)
		.then((json) => {
			return json;
		})
		.catch((error) => {
			throw(error);
		});
	}
}
