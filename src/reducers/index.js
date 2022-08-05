import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_INCREASE_QTY, CART_DECREASE_QTY } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log('@@ cartItems', state.cartItems);
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            console.log("@@ item", item);

            const existItem = state.cartItems ? state.cartItems.find(x => x.product === item.product) : ''
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            const itemID = action.payload
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product != itemID.id)
            }

        case CART_INCREASE_QTY:
            const item1 = action.payload

            const quan = state.cartItems.map(item => {
                if (item.product == item1.id)
                    item.qty = item1.qty
                return item;
            })

            return {
                ...state,
                cartItems: quan

            }


        case CART_DECREASE_QTY:
            const item2 = action.payload

            const decquan = state.cartItems.map(item => {
                if (item.product == item2.id)
                    item.qty = item2.qty
                return item;
            })

            return {
                ...state,
                cartItems: decquan

            }
        default:
            return state
    }
}