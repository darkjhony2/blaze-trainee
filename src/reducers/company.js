import { SET_COMPANY } from "../types";

const initState = {
    companies: {}
}

export default (state= initState, action) => {
    switch (action.type) {
        case SET_COMPANY:
            return {...state, companies: action.payload}
        default:
            return state;
    }
}