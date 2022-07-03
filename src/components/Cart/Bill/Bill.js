import Button from "../../Button/Button";
import BillCategory from "../BillCategory/BillCategory";
import bill from './bill.module.scss';

const Bill = () => {
    return (
        <div className={bill.bill}>
            <h4 className={bill.bill__title}>Pricing Summary</h4>
            <BillCategory category="subtotal" amount="$388.00" />
            <BillCategory category="coupon" amount="$388.00" />
            <BillCategory category="gift card" amount="$388.00" />
            <BillCategory category="estimated tax" amount="$23.28" />
            <BillCategory category="estimated shipping" amount="Free" />
            <BillCategory category="estimated total" amount="$233.68" />

            <Button text="checkout" classes="block" variant="primary" icon="lock.svg" isIcon />
            <Button text="paypal" classes="block" variant="primary" icon="heart.svg" isIcon />

        </div>
    );
}

export default Bill;