import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import CartList from '../components/Cart/CartList';
import AccordionList from "../components/Accordion/AccordionList/AccordionList";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Container from "../components/Container/Container";
import Title from "../components/Headings/Title/Title";
import Lead from '../components/Lead/Lead';
import Button from "../components/Button/Button";
import { FrownIcon } from "../components/Icons/Icons";

import FLexBox from '../components/Layout/Flexbox'
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
    const navigate = useNavigate();
    const navigateToProductsList = () => navigate('/products');

    const CartContent = () => {
        return (
            <div className="aem-Grid aem-Grid--12">
                <Wrapper phone="12" tablet="12" desktop="8">
                    <CartList cartItems={cartItems} />
                    <AccordionList accordionItems={accordion} />
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <Bill />
                </Wrapper>
            </div>
        )
    }

    const HappyShopping = () => {
        return (
            <div className="aem-Grid aem-Grid--12">
                <FLexBox classes="d-flex--align-center d-flex__justify-center d-flex--minus-margin d-flex--column">
                    <FrownIcon />
                    <Lead text="There is nothing in your bag. Let's add some items." />
                    <Button text="shop now" type="outline" variant="primary" onPress={navigateToProductsList} />
                </FLexBox>
            </div>
        )
    }

    return (
        <Container>
            <Title title="Your Shopping Bag" isSpecial />
            {cartItems.length > 0 ? <CartContent /> : <HappyShopping />}
        </Container>
    );
}

export default CartPage;