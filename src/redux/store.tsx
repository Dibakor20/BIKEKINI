import { combineReducers, createStore } from "redux";
import cartReducers from "./reducers/CartReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  cart: cartReducers,
});

const store = createStore(rootReducers, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducers>

export default store;
