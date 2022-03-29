
import { combineReducers } from "redux";


//reducers importation
import productsReducer from "./products";
import cartReducer from "./cart";
import categoriesReducer from "./categories";


//reducers combinaison
const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer,
    categories:categoriesReducer
});

export default rootReducer;