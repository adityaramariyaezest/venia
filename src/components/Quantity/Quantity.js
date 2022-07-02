import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Input from "../Input/Input";

import quantity from './quantity.module.scss';

const Quantity = ({ isLabel }) => {
    return (
        <InputGroup classes={quantity.quantityWrapper}>
            {isLabel ? <p>Quantity</p> : null}
            <Button text="+" classes="round" />
            <Input id="quantity__control" labelText="product__quantity" type="number" classes="form__control" />
            <Button text="-" classes="round" />
        </InputGroup>
    );
}

export default Quantity;