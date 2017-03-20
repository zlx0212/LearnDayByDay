import * as types from '../constants/actionTypes'

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
        console.log('----');
        console.log(ready);
        if (!ready) {
            dispatch(updateHomePageInfo({
                tip:'Great!!!',
                homeBtnText:'Go,Go,GO!'
            }));
        }else {
            console.log('-----3');
        }
    }
}

export function goction() {

}
