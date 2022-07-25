import { useDispatch } from "react-redux";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";

import quantity from './quantity.module.scss';

const Quantity = ({ isLabel, getQuantity }) => {

    const [prodQuantity, setProdQuantity] = useState(1);

    return (
        <InputGroup classes={quantity.quantityWrapper}>
            {isLabel ? <p>Quantity</p> : null}
            <Button text="+" classes="round" onPress={() => {
                getQuantity(prodQuantity + 1);
                setProdQuantity(prodQuantity + 1);
            }} />

            <Input id="quantity__control" labelText="product__quantity" type="number" classes="form__control" value={prodQuantity} />
            <Button text="-" classes="round" onPress={() => {
                getQuantity(prodQuantity - 1);
                setProdQuantity(prodQuantity - 1);
            }} />
        </InputGroup>
    );
}

export default Quantity;