import {HIDE_POPUP, SHOW_POPUP} from "./types";

export const closeAllPopups = () => {
    return {
        type: HIDE_POPUP
    }
}

export const showPopup = (popup: string) => {
    return {
        type: SHOW_POPUP,
        payload: popup
    }
}
