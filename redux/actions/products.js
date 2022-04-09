import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_CART_ITEM_QUANTITY,
    RESETE_CART,
    SET_CATEGORIES,
    GET_PRODUCTS_BY_CATEGORIE,
    SET_PRODUCTS_BY_CATEGORIE,
    SINGLE_PRODUCT,
    SEARCH_PRODUCTS,
    PAGINATIONGINATION
} from "../constants";

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

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


export const deleteToCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const setCartItemQuantity = (product) => {
    return {
        type: SET_CART_ITEM_QUANTITY,
        payload: product
    }
}


export const resetCart = () => {
    return {
        type: RESETE_CART
    }
}


export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}



export const getPorductsByCategorie =()=>{
    return {
        type:GET_PRODUCTS_BY_CATEGORIE
    }
}

export const setSingleProductAction =(product)=>{
    return {
        type:SINGLE_PRODUCT,
        payload:product
    }
}

export const setProductsByCategorie =(products)=>{
    return {
        type:SET_PRODUCTS_BY_CATEGORIE,
        payload:products
    }
}

export const searchProductsAction =(products)=>{
    return {
        type:SEARCH_PRODUCTS,
        payload:products
    }
}


export const paginationAction =(page)=>{
    return {
        type:PAGINATIONGINATION,
        payload:page
    }
}