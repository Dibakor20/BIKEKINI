import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducers from "./reducers/CartReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import { IProduct } from "services/Type";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = combineReducers({
  cart: cartReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof rootReducers>

export default store;
