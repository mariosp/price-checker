import axios from "axios";


export const getProduct = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
}
