'use strict';

import Immutable,{Record, List, Map} from 'immutable';

let InitialState = Record({
    cellListComponent: new (Record({
        isFetching: false,
        cellList: List(),
        curpage: 0,
        totalPage: 3,
    })),
    error: null,
});

export default InitialState;
