import { GET_PRODUCTS,SET_PRODUCTS,ADD_TO_CART } from "../constants";


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

/**
 * 
 * @param {Object} product 
 * @returns 
 */
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

