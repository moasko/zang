import { GET_PRODUCTS,SEARCH_PRODUCTS, SET_PRODUCTS,SET_PRODUCTS_BY_CATEGORIE,SINGLE_PRODUCT,PAGINATION } from "../constants";


const initialState = {
    products: [],
    productsByCategorie: [],
    singleProduct: {},
    searchProducts: [],
    page: 1
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
            case SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: action.payload
            }
            case PAGINATION:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}


export default productsReducer;
