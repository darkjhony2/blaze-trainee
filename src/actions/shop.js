import { addNewShopAPI, deleteShopAPI, fetchShopsAPI, updateShopAPI } from "../api";
import { SET_SHOP } from "../types";
import { addMessageCurry, commonActionAPIHit } from "../utils";


export const setShops = (payload) => ({
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

//export const deleteShop = commonActionAPIHit(deleteShopAPI);
//export const addNewShop = commonActionAPIHit(addNewShopAPI);
//export const updateShop = commonActionAPIHit(updateShopAPI);