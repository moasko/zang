
import { combineReducers } from "redux";


//reducers importation
import productsReducer from "./products";
import cartReducer from "./cart";


//reducers combinaison
const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer
});

export default rootReducer;