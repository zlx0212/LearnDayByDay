'use strict';

import ReactNative, {Platform, Dimensions} from 'react-native';
import CONFIG from '../config/config';
import DeviceInfo from 'react-native-device-info';
import queryString from 'query-string';
import md5 from 'md5';
import timeoutPromise from '../utils/timeoutPromise';
import trimObject from '../utils/trimObject';
import RNNativeConfig from './RNNativeConfig';

export default class NativeRequest {

	constructor(baseURL, timeout) {
		if (baseURL) {
			this.baseUrl = baseURL;
		}

		if (timeout) {
			this.timeout = timeout;
		}
	}



	/**
	 * GET
	 *
	 * @param  {[object]} opts
	 *
	 *   {
	 *      url: '/operations/api/v6/category/getCategory', //接口地址
	 *      timeout: 30,	//毫秒
	 *   }
	 *
	 * @return {[promise]}
	 */
	async get(opts, isFilterData = true) {
		try {
			let host = this.baseUrl;
			let url = opts && opts.url ? opts.url : '';
			let body = opts && opts.body ? opts.body : {};
			let timeout = this.timeout;
			if (!timeout) {
				timeout = opts && opts.timeout ? opts.timeout : 0;
			}

			let params = {
				host,
				timeout,
				url,
				body,
			};
			let response = await ReactNative.NativeModules.YH_NativeRequest.get(params);

			if (Platform.OS === 'android') {
				response = JSON.parse(response);
			}

			if (isFilterData) {
				let data = await this._parseResponse(response);
				return data;
			}else {
				return response;
			}
		} catch(error) {
			throw(error);
		}
	}

	/**
	 * POST
	 *
	 * @param  {[object]} opts
	 *
	 *   {
	 *      url: '/operations/api/v6/category/getCategory', //接口地址
	 *      body: {
	 *      	user: 'Lily',
	 *      	password: '111111',
	 *      },
	 *      timeout: 30,	//毫秒
	 *   }
	 *
	 * @return {[promise]}
	 */
	async post(opts, isFilterData = true) {
    	try {
    		let host = this.baseUrl;
			let url = opts && opts.url ? opts.url : '';
			let body = opts && opts.body ? opts.body : {};
			let timeout = this.timeout;
			if (!timeout) {
				timeout = opts && opts.timeout ? opts.timeout : 0;
			}

			let params = {
				host,
				timeout,
				url,
				body,
			};
			let response = await ReactNative.NativeModules.YH_NativeRequest.post(params);

			if (Platform.OS === 'android') {
				response = JSON.parse(response);
			}

			if (isFilterData) {
				let data = await this._parseResponse(response);
				return data;
			}else {
				return response;
			}

		} catch(error) {
			throw(error);
		}
	}

	async _parseResponse(response) {
		let code = response && response.code ? response.code : 0;
		if (code == 200) {
    		return response.data;
    	} else {
    		let message = response && response.message ? response.message : '';
    		throw({code, message});
    	}
	}
}
