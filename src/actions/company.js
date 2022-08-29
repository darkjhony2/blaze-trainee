import { addNewCompanyAPI, deleteCompanyAPI, fetchCompaniesAPI, updateCompanyAPI } from "../api";
import { SET_COMPANY } from "../types";
import { addMessageCurry, commonActionAPIHit } from "../utils";


export const setCompanies = (payload) => ({
    type: SET_COMPANY,
    payload: payload
})

export const fetchCompanies = () => {
    return dispatch => {
        return new Promise(
            (resolve, reject) => {

                const data = {}

                addMessageCurry(fetchCompaniesAPI(data), dispatch)
                    .then(companies => {
                        resolve(companies);
                        dispatch(setCompanies(companies));
                    })

            }
        )
    }
}

export const deleteCompany = commonActionAPIHit(deleteCompanyAPI);
export const addNewCompany = commonActionAPIHit(addNewCompanyAPI);
export const updateCompany = commonActionAPIHit(updateCompanyAPI);