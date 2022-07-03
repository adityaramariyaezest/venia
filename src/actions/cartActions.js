import { CART_ADD_ITEM } from '../constants/cartConstants'

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
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems))
}