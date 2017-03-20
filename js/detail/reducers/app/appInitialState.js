'use strict';

import {Record, List, Map} from 'immutable';

let InitialState = Record({
	platform: 'ios',	// ios, android
	channel: 1, // 1 - boy, 2 - girl, 3 - kid, 4 - lifestyle, 5 - yoho
	host: 'http://api.yoho.cn',
	serviceHost: 'http://service.yoho.cn',
	abversion: 'A',   //A，B
});

export default InitialState;
