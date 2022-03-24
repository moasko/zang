import { GET_PRODUCTS, SET_PRODUCTS } from "../constants";


const initialState = {
    products: [],
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
        default:
            return state
    }
}


export default productsReducer;
