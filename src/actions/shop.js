import { addNewShopAPI, deleteShopAPI, fetchShopsAPI, getShopByIdAPI, updateShopAPI } from "../api";
import { SET_SHOP, SET_SHOPS } from "../types";
import { addMessageCurry, commonActionAPIHit } from "../utils";


export const setShops = (payload) => ({
    type: SET_SHOPS,
    payload: payload
})

export const setShop = (payload) => ({
    type: SET_SHOP,
    payload: payload
})

export const fetchShops = (username) => {
    return dispatch => {
        return new Promise(
            (resolve, reject) => {
                addMessageCurry(fetchShopsAPI(username), dispatch)
                    .then(shops => {
                        resolve(shops);
                        dispatch(setShops(shops));
                    })

            }
        )
    }
}

export const getShopById = (shopId) => {
    return dispatch => {
        return new Promise(
            (resolve, reject) => {
                addMessageCurry(getShopByIdAPI(shopId), dispatch)
                    .then(shop => {
                        resolve(shop);
                        dispatch(setShop(shop));
                    })
            }
        )
    }
}

//export const deleteShop = commonActionAPIHit(deleteShopAPI);
//export const addNewShop = commonActionAPIHit(addNewShopAPI);
//export const updateShop = commonActionAPIHit(updateShopAPI);