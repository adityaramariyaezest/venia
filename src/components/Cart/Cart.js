import Image from '../Image/Image';
import cart from './cart.module.scss';

const Cart = ({ cartItem }) => {
    return (
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


            <div className={cart.cartlist__product__quantity}>

            </div>

            <ul className={cart.cartlist__product__controls}>
                <li><a href='#'><Image name="edit-2.svg" /> Edit</a></li>
                <li><a href='#'><Image name="trash-2.svg" /> Remove</a></li>
                <li><a href='#'><Image name="heart.svg" /> Save for later</a></li>
            </ul>
        </div>
    );
}

export default Cart;