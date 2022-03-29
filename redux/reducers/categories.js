import { GET_CATEGORIES,SET_CATEGORIES } from "../constants";


const initialState = {
    categories: [],
}



const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
            case GET_CATEGORIES:
                return state.categories
        default:
            return state
    }


}


export default categoriesReducer;