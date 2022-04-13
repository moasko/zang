import { PAGINATION,All_PRODS } from "../constants";

const initialState = {
    page: 1,
    products: [],
};


export default function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case PAGINATION:
            return {
                ...state,
                ...action.payload
            };
        case All_PRODS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;s
    }
}

