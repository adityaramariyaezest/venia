import Cart from "./Cart";

import cart from './cart.module.scss';

const CartList = ({ cartItems }) => {
    return (
        <>
            <div className={cart.cartlist}>
                {
                    cartItems.map((item) => {
                        return (
                            <Cart cartItem={item} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default CartList;