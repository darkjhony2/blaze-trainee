import { apiDelete, apiGet, apiPost, apiPut } from "../utils";

export const fetchCompaniesAPI = (data) => {
    return apiGet('companies', data);
}

export const updateCompanyAPI = (company) => {
    return apiPut(`companies/${company.id}`, company);
}

export const addNewCompanyAPI = (company) => {
    return apiPost('companies', company);
}

export const deleteCompanyAPI = (companyId) => {
    return apiDelete(`companies/delete/${companyId}`);
}