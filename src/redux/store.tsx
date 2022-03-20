import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducers from "./reducers/CartReducers";
import authReducers from "./reducers/AuthReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import { IProduct } from "services/Type";

const rootReducers = combineReducers({
  cart: cartReducers,
  auth: authReducers
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

export type AppState = ReturnType<typeof rootReducers>

export default store;
