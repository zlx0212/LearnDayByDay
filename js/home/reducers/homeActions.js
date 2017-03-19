import * as types from '../constant/actionTypes'

export function updateHomePageBtnText(text) {
    return {
        type: HOME_PAGE_BTN_TEXT,
        payload: text,
    }
}
