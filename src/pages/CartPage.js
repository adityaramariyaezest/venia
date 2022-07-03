
import { useSelector } from "react-redux";
import CartList from '../components/Cart/CartList';
import AccordionList from "../components/Accordion/AccordionList/AccordionList";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";

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
        <div className="aem-Grid aem-Grid--12">
            <h1 className="heading__speciality">Your Shopping Bag</h1>

            <Wrapper phone="12" tablet="12" desktop="8">
                <CartList cartItems={cartItems} />
                <AccordionList accordionItems={accordion} />
            </Wrapper>

            <Wrapper phone="12" tablet="12" desktop="4">
                <Bill />
            </Wrapper>
        </div>
    );
}

export default CartPage;