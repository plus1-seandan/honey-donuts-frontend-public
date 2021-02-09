import { combineReducers } from "redux";
import { createStore } from "redux";

import cartReducer from "./cart";
import menuReducer from "./menu";
import customBoxReduer from "./customBox";

const saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
const allReducers = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  customBox: customBoxReduer,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
