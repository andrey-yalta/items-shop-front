import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware from "redux-thunk";


import itemsReducer from "./items-reducer";
import cartReducer from "./cart-reducer";
import {authReducer} from "./auth-reducer";
import appReducer from "./app-reducer";
import orderReducer from "./order-reducer";




let reducers = combineReducers({
    shopPage:itemsReducer,
    cartPage: cartReducer,
    authPage: authReducer,
    appPage:appReducer,
    orderPage: orderReducer


});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;