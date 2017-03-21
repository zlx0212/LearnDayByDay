import * as types from '../constants/actionTypes'
import ReactNative, {
    NativeModules,
} from 'react-native'
export function updateHomePageInfo(object) {
    return {
        type: types.HOME_PAGE_INFO,
        payload: object,
    }
}

export function readyAction() {
    return(dispatch, getState) => {
        let {home} = getState();
        let {ready} = home;
        if (!ready) {
            dispatch(updateHomePageInfo({
                tip:'Great!!!',
                homeBtnText:'Go,Go,GO!'
            }));
            console.log('from JS to OC');
            NativeModules.HomeManager.testCallBackParms('from JS to OC',(error,events)=> {
                console.log('------>');
                console.log(events);
            });
        }else {
            NativeModules.HomeManager.jumpToSecondPage();
        }
    }
}

export function goction() {

}
