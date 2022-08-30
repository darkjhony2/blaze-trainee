import { apiDelete, apiGet, apiPost, apiPut } from "../utils";

export const fetchShopsAPI = (data) => {
    return apiGet('shops', data);
}

export const updateShopAPI = (shop) => {
    return apiPut(`shops/${shop.id}`, shop);
}

export const addNewShopAPI = (shop) => {
    return apiPost('shops', shop);
}

export const deleteShopAPI = (shopId) => {
    return apiDelete(`shops/delete/${shopId}`);
}