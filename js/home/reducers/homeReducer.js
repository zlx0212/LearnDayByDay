import * as types from '../constants/actionTypes';
import InitialState from './homeInitialState';

const initialState = new InitialState;

export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case types.HOME_PAGE_INFO:
            return state.set('homeBtnText', action.payload.homeBtnText)
            .set('tip', action.payload.tip)
            .set('ready', true);
        default:
            return state;
    }
}
