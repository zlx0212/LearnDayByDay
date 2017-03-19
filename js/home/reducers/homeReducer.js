import * as types from '../constant/actionTypes';
import initialState from './homeInitialState';

export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case types.HOME_PAGE_BTN_TEXT:
            return state.set('homeBtnText',action.payload);
        default:
            return state;
    }
}
