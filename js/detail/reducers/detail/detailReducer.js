import * as types from '../../constants/actionTypes';
import InitialState from './detailInitialState';
import Immutable from 'immutable';

const {
	FETCH_CELL_LIST_REQUEST,
    FETCH_CELL_LIST_SUCCESS,
    FETCH_CELL_LIST_FAILURE,

} = require('../../constants/actionTypes').default;

const initialState = new InitialState;

export default function detailReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_CELL_LIST_REQUEST:
            return state.setIn(['cellListComponent','isFetching'], true);
        case FETCH_CELL_LIST_SUCCESS:
            return state.setIn(['cellListComponent','isFetching'], false)
            .setIn(['cellListComponent','cellList'], Immutable.fromJS(action.payload.newCellList))
			.setIn(['cellListComponent', 'curpage'],action.payload.curpage);
        case FETCH_CELL_LIST_FAILURE:
            return state.setIn(['cellListComponent','isFetching'], false)
            .set('error', action.payload);
        default:
            return state;
    }
}
