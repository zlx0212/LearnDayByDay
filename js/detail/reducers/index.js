import {combineReducers} from 'redux';
import detail from './detail/detailReducer';
import app from './app/appReducer';

const rootReducer = combineReducers({
    app,
    detail,
});

export default rootReducer;
