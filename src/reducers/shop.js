import { SET_SHOP } from "../types";

const initState = {
    shops: {}
}

export default (state= initState, action) => {
    switch (action.type) {
        case SET_SHOP:
            return {...state, shops: action.payload}
        default:
            return state;
    }
}