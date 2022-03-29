import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEM_QUANTITY,RESETE_CART } from "../constants";


const initialState = {
    cart: [],
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case SET_CART_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qt: action.payload.qt
                        }
                    }
                    return item
                })
            }

        case RESETE_CART:
            return {
                ...state,
                cart: []
            }

        default:
            return state
    }
}

export default cartReducer;