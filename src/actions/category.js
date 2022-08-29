import { addNewCategoryAPI, deleteCategoryAPI, fetchCategoriesAPI, updateCategoryAPI } from "../api";
import { SET_CATEGORY } from "../types";
import { addMessageCurry, commonActionAPIHit } from "../utils";


export const setCategories = (payload) => ({
    type: SET_CATEGORY,
    payload: payload
})

export const fetchCategories = () => {
    return dispatch => {
        return new Promise(
            (resolve, reject) => {

                const data = {}

                addMessageCurry(fetchCategoriesAPI(data), dispatch)
                    .then(categories => {
                        resolve(categories);
                        dispatch(setCategories(categories));
                    })

            }
        )
    }
}

export const deleteCategory = commonActionAPIHit(deleteCategoryAPI);
export const addNewCategory= commonActionAPIHit(addNewCategoryAPI);
export const updateCategory = commonActionAPIHit(updateCategoryAPI);