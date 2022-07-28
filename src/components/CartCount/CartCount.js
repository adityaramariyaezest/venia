import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import c from './cartCount.module.scss';

export const CartCount = ({ icon, iconColor, linkTo }) => {
    const CartIcon = icon;
    const cartItems = useSelector(state => state.cartItems);
    return (
        <div className={c.cart}>
            <Link to={linkTo}><CartIcon mode={iconColor} />
                {cartItems.length > 0 ?
                    <div className={c['cart-count']}>{cartItems.length}</div> : null}
            </Link>
        </div>

    );
}

