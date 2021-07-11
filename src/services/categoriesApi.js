import axios from "axios";


export const getCategories = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories`);
}

export const getCategoryDetails = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}`);
}

export const getCategoryProducts = (id, order = "asc", sort="",pageSize, currentPage, price_min = "", price_max="") => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}/products?page=${currentPage}&limit=${pageSize}&order=${order}&sort=${sort}&min_price=${price_min}&max_price=${price_max}`);
}
