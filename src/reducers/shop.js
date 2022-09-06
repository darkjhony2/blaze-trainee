import { SET_SHOP, SET_SHOPS } from "../types";

const initState = {
    shops: {},
    shop: {}
}

export default (state= initState, action) => {
    switch (action.type) {
        case SET_SHOPS:
            return {...state, shops: action.payload}
        case SET_SHOP:
            return {...state, shop: action.payload}
        default:
            return state;
    }
}