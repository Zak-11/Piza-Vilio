import {combineReducers} from "redux";
import filters from "../reduser/filters";
import pizzas from "../reduser/pizzas";
import cart from "./cart";





const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});
export default rootReducer;