import { useSelector } from "react-redux";
import Button from "../../Button/Button";
import BillCategory from "../BillCategory/BillCategory";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";

import bill from './bill.module.scss';

const Bill = () => {
    const cartItems = useSelector(state => state.cartItems);

    let coupon = 5;
    let giftCard = 0;
    let estimatedTax = 18;
    let estimatedShipping = 0;

    const subtotal = cartItems.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    const couponAmount = (coupon * subtotal) / 100;
    //need to calculate
    const giftCardAmount = 0;
    const estimatedTaxAmount = (estimatedTax * subtotal) / 100;
    const estimatedTotal = subtotal + giftCardAmount + estimatedTaxAmount + estimatedShipping - couponAmount;

    return (
        <div className={bill.bill}>
            <h4 className={bill.bill__title}>Pricing Summary</h4>
            <BillCategory category="subtotal" amount={subtotal.toFixed(2)} />
            <BillCategory category="coupon" amount={`${coupon} %`} />
            <BillCategory category="gift card" amount={`${giftCard}`} />
            <BillCategory category="estimated tax" amount={`${estimatedTax} %`} />
            <BillCategory category="estimated shipping" amount="Free" />
            <BillCategory category="estimated total" amount={estimatedTotal.toFixed(2)} />
            <ButtonGroup classes="d-flex">
                <Button text="checkout" classes="primary" icon="lock.svg" isIcon imageDescription="checkout-button-icon" />
                <Button text="paypal" classes="checkout" icon="heart.svg" />
            </ButtonGroup>
        </div>
    );
}

export default Bill;