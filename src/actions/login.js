
import { singIn } from "../api";
import { AUTH_LOGIN } from "../types/login";
import { addMessageCurry } from "../utils";

export const authLogin = payload => ({
    type: AUTH_LOGIN,
    payload: payload
})


export const login = (data) => (dispatch => new Promise(
            (resolve, reject) => {
                addMessageCurry(singIn({...data}), dispatch)
                    .then(session => {
                        resolve(session)
                        dispatch(authLogin({ session }))
                    })
                    .catch(
                        err => reject(err)
                    )
            })
)

