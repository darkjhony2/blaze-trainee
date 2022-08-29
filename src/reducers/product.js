import { SET_PRODUCTS } from "../types";

const initState = {
    products: {}
}

export default (state= initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}