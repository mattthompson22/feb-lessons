import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import planetReducer from "./planets.js";
import characterReducer from "./characters.js";

const globalState = {
    planets: planetReducer,
    characters: characterReducer,
}

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));
export default store;