import { CART_ADD_ITEM, CART_INCREASE_QTY, CART_DECREASE_QTY } from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.title,
            image: data.image,
            price: data.price,
            qty: 1,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}

export const incrementQuantity = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_INCREASE_QTY,
        payload: {
            id: id
        }
    })
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