'use strict';

import ReactNative, {Platform, Dimensions} from 'react-native';
import CONFIG from '../config/config';
import DeviceInfo from 'react-native-device-info';
import queryString from 'query-string';
import md5 from 'md5';
import timeoutPromise from '../utils/timeoutPromise';
import trimObject from '../utils/trimObject';
import RNNativeConfig from './RNNativeConfig';

export default class Request {

	constructor(baseURL, timeout=10000) {
		if (baseURL) {
			this.baseUrl= baseURL;
			this.timeout = timeout;
		} else {
			this.config = process.env.NODE_ENV === `development` ? CONFIG.dev : CONFIG.prd;

			this.baseUrl= this.config.baseUrl;
			this.timeout = this.config.HTTPTimeout;
		}

		this.privateKey = RNNativeConfig.getPrivateKey();
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

		if (opts.body) {
			if (!opts.body.hasOwnProperty('uid')) {
				let uid = await ReactNative.NativeModules.RNNativeConfig.uid();
		    	opts.body.uid = uid;
			}

		    let physical_channel = await ReactNative.NativeModules.YH_CommonHelper.currentChannel();
		    opts.body.physical_channel = physical_channel;
		}

		try {
			let response = await this._fetch({
				method: 'GET',
				url: opts.url,
				body: opts.body,
				timeout: opts.timeout | 0,
			});

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
		if (opts.body && !opts.body.hasOwnProperty('uid')) {
			let uid = await ReactNative.NativeModules.RNNativeConfig.uid();
		    opts.body.uid = uid
		}
    	try {
			let response = await this._fetch({
				method: 'POST',
				url: opts.url,
				body: opts.body,
				timeout: opts.timeout | 0,
	    	});
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
		// console.log(response.ok);
		if (response.ok) {
			let json = await response.json();
	    	if (json.code == 200) {
	    		return json.data;
	    	} else {
	    		throw({code: json.code, message: json.message});
	    	}
		} else {
			let error = new Error(response.statusText);
    		error.response = response;
    		throw(error);
		}
	}

	/**
	* ### _fetch
	*/
	async _fetch(opts) {
		let defaultOpts = this._defaultOpts();
		opts = {
			...defaultOpts,
			...opts
		};
		opts.body = this._createBody(opts.body);

		if (opts.timeout === 0) {
			opts.timeout = this.timeout;
		}

		let reqOpts = {
			method: opts.method,
			headers: {

			}
		};

		if (opts.method === 'GET' || opts.method === 'POST') {
			// reqOpts.headers['Accept'] = 'application/json';
			reqOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}

		let queryStrigPair = this._signParam(opts.body);

		if (opts.method === 'GET' || opts.method === 'HEAD' || opts.method === 'DELETE') {
			opts.url = opts.url + '?' + queryStrigPair;
		}

		if (opts.body && opts.method !== 'GET' && opts.method !== 'HEAD') {
			reqOpts.body = queryStrigPair;
		}

		__DEV__ && console.log(this.baseUrl + opts.url);

		if (opts.timeout && opts.timeout > 0) {
			return await timeoutPromise(opts.timeout, fetch(this.baseUrl + opts.url, reqOpts));
		}

		return await fetch(this.baseUrl + opts.url, reqOpts);
	}

	_defaultOpts() {
		return {
			method: 'GET',
			url: null,
			body: null,
			callback: null,
		};
	}

	_publicParams() {
		let app_version = DeviceInfo.getBuildNumber();
		let os_version = DeviceInfo.getSystemVersion();
		let client_type = Platform.OS === 'ios' ? 'iphone' : 'android';
		let {height, width} = Dimensions.get('window');
		let screen_size = width + 'x' + height;
		let udid = ReactNative.NativeModules.RNNativeConfig.udid;
		return {
			app_version,
			os_version,
			client_type,
			screen_size,
			udid,
		};
	}

	_createBody(body) {
		let defaultBody = this._publicParams();
		let newBody = {
			...defaultBody,
			...body
		};

		return newBody;
	}

	_signParam(params) {
		let private_key = this.privateKey;
		let allParams = {
			...params,
			private_key
		}

		allParams = trimObject(allParams);	// 去除首尾空格

		let paramsPair = queryString.stringify(allParams, {encode: false});
		let client_secret = md5(paramsPair);

		delete allParams.private_key;

		let resultParams = {
			...allParams,
			client_secret
		}

		return queryString.stringify(resultParams);
	}
};
