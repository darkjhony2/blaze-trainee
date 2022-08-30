import { AUTH_LOGIN } from "../types";

const initState = {
    login: {
        username: '',
        password: '',
        isLoading: ''
    }
}

export default (state= initState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {...state, login: action.payload}
        default:
            return state;
    }
}