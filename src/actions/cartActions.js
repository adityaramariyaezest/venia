import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_INCREASE_QTY, CART_DECREASE_QTY } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.title,
            image: data.image,
            price: data.price,
            qty: qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}

export const deleteFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            id: id
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}

export const incrementQuantity = (id, qty) => (dispatch, getState) => {
    dispatch({
        type: CART_INCREASE_QTY,
        payload: {
            id: id,
            qty: qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}

export const decrementQuantity = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_DECREASE_QTY,
        payload: {
            id: id
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}