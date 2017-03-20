import {combineReducers} from 'redux';
import detail from './detailReducer';

const rootReducer = combineReducers({
    detail,
});

export default rootReducer;
