import axios from 'axios'
import { apiUrl } from './constants';
import qs from 'query-string';
import { startLoading, stopLoading } from '../actions/loading';

export const saveObject = (key, value) => {
    if (window && window.localStorage) {
        window.localStorage.setItem(key, value);
    }
}

export const removeObject = (key) => {
    if (window && window.localStorage) {
        window.localStorage.removeItem(key);
    }
}

export const getObject = (key) => {
    if (window && window.localStorage) {
        return window.localStorage.getItem(key);
    }
    return null;
}

export const logOut = () => {
    return new Promise((res, rej) => {
        localStorage.removeItem('token');
        //localStorage.removeItem('time');
        //localStorage.removeItem('docuSign')
        res(true);
    })
}

export const isLoggedIn = () => {
    let session = getObject('token');

    let accessToken = session && session.accessToken;

    return accessToken;
}

export const generateUrl = (path) => {
    return apiUrl + path;
}

export const apiReq = (endPoint, data, method, headers, requestOptions = {}) => {
    return new Promise((res, rej) => {

        headers = {
            ...getHeaders(),
            ...headers
        }
        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                params: data,
                headers
            }
        }

        axios[method](endPoint, data, { headers }).then((result) => {
            let { data } = result;

            if (data.status === false) {
                return rej(data);
            }

            return res(data);
        }).catch((err) => {
            return rej(err);
        });
    })
}

export const apiPost = (endPoint, data, headers = {}) => {
    return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export const apiDelete = (endPoint, data, headers = {}) => {
    return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export const apiGet = (endPoint, data, headers = {}, requestOptions) => {
    return apiReq(generateUrl(endPoint), data, 'get', headers, requestOptions);
}

export const apiPut = (endPoint, data, headers = {}) => {
    return apiReq(generateUrl(endPoint), data, 'put', headers);
}

export const addMessageCurry = (promise, dispatch, errorMsg = '', successMsg = '', showLoading = true, showError = true) => {
    return new Promise(
        (resolve, reject) => {

            if (showLoading) {
                dispatch(startLoading())
            }

            promise
                .then(response => {

                    if (showLoading) {
                        dispatch(stopLoading())
                    }

                    resolve(response)
                })
                .catch(
                    err => {
                        if (showLoading) {
                            dispatch(stopLoading())
                        }
                        reject(err)
                    }
                )

        }
    )
}

export const commonActionAPIHit = (apiToHit, errorMsg, successMsg, showModal = true) => {
    return data => {
        return dispatch => {
            return new Promise(
                (resolve, reject) => {
                    addMessageCurry(apiToHit(data), dispatch, errorMsg, successMsg, showModal)
                        .then(result => {
                            resolve(result);
                        })
                }
            )
        }
    }
}

export const getHeaders = () => {
    let session = getSession();
    return {
        Authorization: `Bearer ${(session && session) || null}`
    }
}

export function getSession() {
	if (window && window.localStorage) {
		return window.localStorage.getItem('token');
	}

	return null;
}

