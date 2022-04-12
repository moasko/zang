
import { combineReducers } from "redux";


//reducers importation
import productsReducer from "./products";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import paginationReducer from "./paginat";


//reducers combinaison
const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer,
    categories:categoriesReducer,
    pagination:paginationReducer
});

export default rootReducer;