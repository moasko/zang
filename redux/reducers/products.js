import { GET_PRODUCTS, SET_PRODUCTS,SET_PRODUCTS_BY_CATEGORIE,SINGLE_PRODUCT } from "../constants";


const initialState = {
    products: [],
    productsByCategorie: [],
    singleProduct: {},
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
        case SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.payload
            }
        default:
            return state
    }
}


export default productsReducer;
