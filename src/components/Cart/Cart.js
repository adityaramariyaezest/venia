import Image from '../Image/Image';
import CartQuantity from '../CartQuantity/CartQuantity';
import { Link } from "react-router-dom";

import cart from './cart.module.scss';

const Cart = ({ cartItem }) => {
    return (
        <>
            <div className={cart.cartlist__product}>
                <div className={cart.cartlist__product__info}>
                    <div className={cart.cartlist__product__image}>
                        <img src={cartItem.image} alt={cartItem.name} height="150" />
                    </div>
                    <div className={cart.cartlist__product__details}>
                        <p className={cart.cartlist__product__title}>{cartItem.name}</p>
                        <p className={cart.cartlist__product__size}>size: Medium</p>
                        <p className={cart.cartlist__product__color}>color: Storm</p>
                        <p className={cart.cartlist__product__price}>${cartItem.price}</p>
                    </div>
                </div>

                <CartQuantity id={cartItem.product} qty={cartItem.qty} />

                <ul className={cart.cartlist__product__controls}>
                    <li>
                        <Link to="/cart"><Image name="edit-2.svg" alt="edit this product" /> Edit</Link>
                    </li>
                    <li>
                        <Link to="/cart"><Image name="trash-2.svg" alt="delete this product" /> Remove</Link>
                    </li>
                    <li>
                        <Link to="/cart"><Image name="heart.svg" alt="save for later" /> Save for later</Link>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Cart;