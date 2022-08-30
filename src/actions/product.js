import { addNewProductAPI, deleteProductAPI, fetchProductsAPI, updateProductAPI } from "../api";
import { SET_PRODUCTS } from "../types";
import { addMessageCurry, commonActionAPIHit } from "../utils";


export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload: payload
})

export const fetchProducts = () => {
    return dispatch => {
        return new Promise(
            (resolve, reject) => {

                const data = {}

                addMessageCurry(fetchProductsAPI(data), dispatch)
                    .then(products => {
                        resolve(products);
                        dispatch(setProducts(products));
                    })

            }
        )
    }
}

//export const deleteProduct = commonActionAPIHit(deleteProductAPI);
//export const addNewProduct = commonActionAPIHit(addNewProductAPI);
//export const updateProduct = commonActionAPIHit(updateProductAPI);