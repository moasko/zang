import { GET_PRODUCTS, SET_PRODUCTS,SET_PRODUCTS_BY_CATEGORIE } from "../constants";


const initialState = {
    products: [],
    productsByCategorie: []
}


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return state
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCTS_BY_CATEGORIE:
            return {
                ...state,
                productsByCategorie: action.payload
            }
        default:
            return state
    }
}


export default productsReducer;
