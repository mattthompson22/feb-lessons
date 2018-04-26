import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import catReducer from "./cats.js";

const globalState = {
    cats: catReducer
};

const store = createStore(catReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;