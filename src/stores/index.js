import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { cartReducer } from '../reducers/index'

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartItems: cartItemsFromStorage
}
const store = createStore(cartReducer, initialState, applyMiddleware(thunkMiddleware));
export default store;