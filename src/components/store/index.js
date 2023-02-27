import { combineReducers, createStore } from "redux";
import { productsReducer } from "./products";
import { userReducer } from "./user-slice";
const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer
})

export const store = createStore(rootReducer);


