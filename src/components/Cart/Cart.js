// import Image from '../Image/Image';
import { useDispatch } from "react-redux";
import { deleteFromCart } from '../../actions/cartActions';

import CartQuantity from '../CartQuantity/CartQuantity';
import { Link } from "react-router-dom";
import { EditIcon2, HeartIcon, TrashIcon } from '../Icons/Icons';

import cart from './cart.module.scss';
import Button from "../Button/Button";

const Cart = ({ cartItem }) => {
    const dispatch = useDispatch();
    const handleEvent = (e, productId) => {
        e.preventDefault();
        dispatch(deleteFromCart(productId));
    };

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
                        <Link to="/cart"><EditIcon2 /> Edit</Link>
                    </li>
                    <li>
                        <Link to="/cart" onClick={e => handleEvent(e, cartItem.product)}><TrashIcon /> Remove {cartItem.product}</Link>
                    </li>
                    <li>
                        <Link to="/cart"><HeartIcon /> Save for later</Link>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Cart;