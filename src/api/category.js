import { apiDelete, apiGet, apiPost, apiPut } from "../utils";

export const fetchCategoriesAPI = (data) => {
    return apiGet('categories', data);
}

export const updateCategoryAPI = (category) => {
    return apiPut(`categories/${category.id}`, category);
}

export const addNewCategoryAPI = (category) => {
    return apiPost('categories', category);
}

export const deleteCategoryAPI = (categoryId) => {
    return apiDelete(`categories/delete/${categoryId}`);
}