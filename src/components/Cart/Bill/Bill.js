
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Button from "../../Button/Button";
import BillCategory from "../BillCategory/BillCategory";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import { LockIcon, PaypalIcon } from "../../Icons/Icons";

import bill from './bill.module.scss';

const Bill = ({ isButton }) => {
    const cartItems = useSelector(state => state.cartItems);

    const navigate = useNavigate();
    const navigateToCheckoutPage = () => navigate('/checkout');

    let coupon = 5;
    let giftCard = 0;
    let estimatedTax = 18;
    let estimatedShipping = 0;

    const subtotal = cartItems.reduce((accumulator, object) => {
        return accumulator + (object.price * object.qty);
    }, 0);

    const couponAmount = (coupon * subtotal) / 100;
    //need to calculate
    const giftCardAmount = 0;
    const estimatedTaxAmount = (estimatedTax * subtotal) / 100;
    const estimatedTotal = subtotal + giftCardAmount + estimatedTaxAmount + estimatedShipping - couponAmount;

    return (
        <div className={bill.bill}>
            <p className={bill.bill__title}>Pricing Summary</p>
            <BillCategory category="subtotal" amount={subtotal.toFixed(2)} />
            <BillCategory category="coupon" amount={`${coupon} %`} />
            <BillCategory category="gift card" amount={`${giftCard}`} />
            <BillCategory category="estimated tax" amount={`${estimatedTax} %`} />
            <BillCategory category="estimated shipping" amount="Free" />
            <BillCategory category="estimated total" amount={estimatedTotal.toFixed(2)} />
            {!isButton ?
                <ButtonGroup classes="d-flex">
                    <Button text="checkout" type="solid" variant="primary" isBlock="true" icon={LockIcon} isIcon svgIconMode="light" imageDescription="checkout-button-icon" onPress={navigateToCheckoutPage} />
                    <Button type="solid" variant="primary" isBlock="true" icon={PaypalIcon} isIcon image="paypal" />

                </ButtonGroup>
                : null}
        </div>
    );
}

export default Bill;