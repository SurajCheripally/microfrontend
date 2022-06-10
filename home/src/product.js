import axios from "axios"

const URL = `https://fakestoreapi.com/products`

export const getProducts = () => {
    return axios.get(URL)
}

export const getProductById = (id) => {
    return axios.get(`${URL}/${id}`)
}