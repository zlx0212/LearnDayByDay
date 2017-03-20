import * as types from '../../constants/actionTypes';
import InitialState from './detailInitialState';

const initialState = new InitialState;

export default function detailReducer(state=initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
