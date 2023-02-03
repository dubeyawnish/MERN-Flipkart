import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { getProductsReducer } from './reducers/productReducer';



/// it combine more than one reducer
const reducer = combineReducers({
    getProducts: getProductsReducer
});

//thunk as a middleware
const middleware = [thunk];

// create store required two component a reducer and middle ware .We pass a middleware as a argument in composeWithDevTools with the help of applyMiddleware function
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))


)

export default store;