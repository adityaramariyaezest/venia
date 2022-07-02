
import { useSelector } from "react-redux";
import CartList from '../components/Cart/CartList';

const CartPage = () => {
    const cartItems = useSelector(state => state.cartItems);

    return (
        <CartList cartItems={cartItems} />
    );
}

export default CartPage;