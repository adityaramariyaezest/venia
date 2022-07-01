import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Input from "../Input/Input";

import quantity from './quantity.module.scss';

const Quantity = () => {
    return (
        <InputGroup classes={quantity.quantityWrapper}>
            <p>Quantity</p>
            <Button text="+" classes="round" />
            <Input id="quantity__control" labelText="product__quantity" type="number" classes="form__control" />
            <Button text="-" classes="round" />
        </InputGroup>
    );
}

export default Quantity;