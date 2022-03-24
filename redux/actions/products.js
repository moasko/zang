import { GET_PRODUCTS,SET_PRODUCTS } from "../constants";


export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}


export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}