
import { combineReducers } from "redux";

//reducers importation
import productsReducer from "./products";


//reducers combinaison
const rootReducer = combineReducers({
    products: productsReducer
});

export default rootReducer;