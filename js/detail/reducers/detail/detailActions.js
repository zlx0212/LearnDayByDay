'use strict';

import ReactNative, {
    NativeModules,
} from 'react-native'

const {
	FETCH_CELL_LIST_REQUEST,
    FETCH_CELL_LIST_SUCCESS,
    FETCH_CELL_LIST_FAILURE,

} = require('../../constants/actionTypes').default;
import TimerMixin from 'react-timer-mixin';

export function fetchCellListRequest() {
	return {
        type: FETCH_CELL_LIST_REQUEST,
    }
}

export function fetchCellListSeccess(list) {
	return {
        type: FETCH_CELL_LIST_SUCCESS,
        payload: list,
    }
}

export function fetchCellListFailure(error) {
	return {
        type: FETCH_CELL_LIST_FAILURE,
        payload: error,
    }
}

export function fetchCellList(refreshFlag=false) {
	return (dispatch, getState) => {
        let {app, detail} = getState();
        let {cellListComponent} = detail;
        let {isFetching,cellList,curpage,totalPage} = cellListComponent;
        if (isFetching || (!refreshFlag && curpage == totalPage)) {
            return;
        }
        dispatch(fetchCellListRequest());
        TimerMixin.setTimeout(() => {
                let dValueList = generateCellList();
                if (refreshFlag) {
                    dispatch(fetchCellListSeccess({newCellList:dValueList,curpage:1}));
                } else {
                    curpage++;
                    let oldCellList = cellList.toJS();
                    let newCellList = [...oldCellList,...dValueList];
                    dispatch(fetchCellListSeccess({newCellList,curpage}));
                }
            },
            2000
        );
    };
}

export function refreshList() {
    return (dispatch, getState) => {
        dispatch(fetchCellList(true));
    };
}

function generateCellList() {
    let cellList = [];
    for (var i = 0; i < 30; i++) {
        cellList.push({
            icon: '../images/01.png',
            text: 'so...so...sweet',
        });
    }
    return cellList;
}
