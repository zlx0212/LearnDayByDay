'use strict';

import Immutable,{Record} from 'immutable';

let InitialState = Record({
    tip: '你准备好了吗?',
    homeBtnText: '是的',
    ready: false,
});

export default InitialState;
