import { CART_ADD_ITEM, CART_INCREASE_QTY, CART_DECREASE_QTY } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            console.log('state', item);
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
        case CART_INCREASE_QTY:
            const item1 = action.payload
            console.log('@@ item', item1.id);
            console.log('@@ state', state);

            const filteredItem = state.cartItems.filter((item) => item.product == item1.id)

            const quan = filteredItem.map(item => {
                item.qty = item.qty + 1
                return item;
            })

            // const filteredItem = state.cartItems.filter(item => item.product == item1.id).qty = item.qty + 1;

            console.log('@@ filtered', filteredItem);
            console.log('@@ quan', quan);

            return {
                ...state,
                // cartItems: [...state.cartItems, quan]
                quan
            }

        // if (existItem) {
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.map(x =>
        //             x.product === existItem.product ? item : x)
        //     }
        // } else {
        //     return {
        //         ...state,
        //         cartItems: [...state.cartItems, item]
        //     }
        // }
        case CART_DECREASE_QTY:
        default:
            return state
    }
}