'use strict';

import Immutable,{Record, List, Map} from 'immutable';

let InitialState = Record({
    cellListComponent: new (Record({
        isFetching: false,
        cellList: List(),
        pages: 10,
    })),
    tip: 'SecondPage',
    error: null,
    curpage: 0,
    ptr: true,
});

export default InitialState;
