import { apiPost } from "../utils";

export const singIn = (loginRequest) => {
    return apiPost('auth/signin', loginRequest);
}

export const signUp = (signUpRequest) => {
    return apiPost('auth/signup', signUpRequest);
}