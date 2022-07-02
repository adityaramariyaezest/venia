
import { useSelector } from "react-redux";
import CartList from '../components/Cart/CartList';
import AccordionList from "../components/Accordion/AccordionList/AccordionList";

const accordion = [
    {
        id: "accordion__101",
        key: "Estimate your Shipping",
        value: "Shipping to 91001"
    },

    {
        id: "accordion__102",
        key: "Enter a Coupon Code",
        value: "20% discount applied"
    },

    {
        id: "accordion__103",
        key: "Apply Gift Card",
        value: " "
    }
]

const CartPage = () => {
    const cartItems = useSelector(state => state.cartItems);

    return (
        <>
            <CartList cartItems={cartItems} />
            <AccordionList accordionItems={accordion} />
        </>
    );
}

export default CartPage;