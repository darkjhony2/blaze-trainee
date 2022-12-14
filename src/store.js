import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from './reducers/product';
import companyReducer from './reducers/company';
import categoryReducer from './reducers/category';
import shopReducer from './reducers/shop';
import loginReducer from './reducers/login';

import thunk from 'redux-thunk'

const reducer = combineReducers({
    productReducer,
    companyReducer,
    categoryReducer,
    shopReducer,
    loginReducer
})



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;