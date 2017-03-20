'use strict';

import Immutable,{Record, List, Map} from 'immutable';

let homeList = [
    {
        'selected': false,
        'text': 'JavaScript基础',
    }, {
        'selected': false,
        'text': 'redux',
    },{
        'selected': false,
        'text': '数据到页面整体闭环',
    }
];

let InitialState = Record({
    homeList: Immutable.fromJS(homeList),
    tip: '你准备好了吗?',
    homeBtnText: '是的',
    ready: false,
});

export default InitialState;
