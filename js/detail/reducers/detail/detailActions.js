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
        let {isFetching,cellList} = cellListComponent;
        if (isFetching) {
            return;
        }
        dispatch(fetchCellListRequest());
        TimerMixin.setTimeout(() => {
                let dValueList = generateCellList();
                console.log('--------1111');
                console.log(dValueList);
                if (refreshFlag) {
                    dispatch(fetchCellListSeccess(dValueList));
                } else {
                    let oldCellList = cellList.toJS();
                    let newCellList = [...oldCellList,...dValueList];
                    dispatch(fetchCellListSeccess(newCellList));
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
    return [
        {
            icon: '../images/01.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/02.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/03.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/04.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/05.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/06.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/07.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/08.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/09.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/10.png',
            text: 'so...so...sweet',
        },{
            icon: '../images/11.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/12.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/13.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/14.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/15.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/16.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/17.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/18.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/19.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/20.png',
            text: 'so...so...sweet',
        },{
            icon: '../images/21.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/22.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/23.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/24.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/15.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/16.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/17.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/18.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/19.png',
            text: 'so...so...sweet',
        }, {
            icon: '../images/20.png',
            text: 'so...so...sweet',
        }
    ];
}
