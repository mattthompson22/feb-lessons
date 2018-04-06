import { createStore, combineReducers } from "redux";

import catsReducer from "./cats";

const store = createStore(combineReducers({ cats: catsReducer }));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;