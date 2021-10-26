import filtersReducer from '../reduser/filters'
import pizzasReducer from '../reduser/pizzas'
import {combineReducers} from "redux";





const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

export default rootReducer;