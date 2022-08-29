import { SET_CATEGORY } from "../types";

const initState = {
    categories: {}
}

export default (state= initState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, categories: action.payload}
        default:
            return state;
    }
}