import {HIDE_LOADER, HIDE_POPUP, SHOW_LOADER, SHOW_POPUP} from "./types";

const initialState = {
    loader: false,
    showDeletePopup: false,
    showEditPopup: false,
    showAddPopup: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: true}
        case HIDE_LOADER:
            return {...state, loader: false}
        case SHOW_POPUP:
            return {...state, [`show${action.payload}Popup`]: true}
        case HIDE_POPUP:
            return {...state, showAddPopup: false, showDeletePopup: false, showEditPopup: false}
        default:
            return state;
    }
}
