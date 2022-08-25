
export const fetchProductsAPI = (data) => {
    return apiGet('products', data);
}

export const updateProductAPI = (product) => {
    return apiPut(`products/${product.id}`, product);
}

export const addNewProductAPI = (product) => {
    return apiPost('products', product);
}

export const deleteProductAPI = (productId) => {
    return apiDelete(`products/delete/${productId}`);
}