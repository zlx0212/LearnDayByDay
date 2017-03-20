'use strict';

import InitialState from './appInitialState';

const {
	SET_PLATFORM,
	SET_CHANNEL,
	SET_HOST,
	SET_SERVICE_HOST,
	SET_AB_VERSION,
} = require('../../constants/actionTypes').default;

const initialState = new InitialState;

export default function appReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.merge(state);

    switch (action.type) {
		case SET_PLATFORM:
			return state.set('platform', action.payload);
		case SET_CHANNEL:
			return state.set('channel', action.payload);
		case SET_HOST:
			return state.set('host', action.payload);
		case SET_SERVICE_HOST:
			return state.set('serviceHost', action.payload);
		case SET_AB_VERSION:
			return state.set('abversion', action.payload);
    }

    return state;
}
