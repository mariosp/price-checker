import axios from "axios";


export const getCategories = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories`);
}

export const getCategoryDetails = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}`);
}

export const getCategoryProducts = (id, order = "asc", sort="") => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}/products?order=${order}&sort=${sort}`);
}
