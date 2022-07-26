
import { useSelector } from "react-redux";
import CartList from '../components/Cart/CartList';
import AccordionList from "../components/Accordion/AccordionList/AccordionList";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Container from "../components/Container/Container";
import Title from "../components/Headings/Title/Title";


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
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Your Shopping Bag" isSpecial />
                <Wrapper phone="12" tablet="12" desktop="8">
                    <CartList cartItems={cartItems} />
                    <AccordionList accordionItems={accordion} />
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <Bill />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CartPage;