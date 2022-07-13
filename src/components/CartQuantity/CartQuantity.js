import { useDispatch } from "react-redux";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { incrementQuantity, decrementQuantity } from '../../actions/cartActions';
import { useState } from "react";

import quantity from './cartQuantity.module.scss';

const Quantity = ({ isLabel, id, qty }) => {

    const [quatntity, setQuatntity] = useState(qty)

    const [prodQuantity, setProdQuantity] = useState(1);
    const dispatch = useDispatch();

    // const handleIncEvent = () => dispatch(incrementQuantity(id))
    // const handleDecEvent = () => dispatch(decrementQuantity(id))

    const handleIncEvent = () => dispatch(incrementQuantity(id));
    const handleDecEvent = () => dispatch(decrementQuantity(id));

    return (
        <InputGroup classes={quantity.quantityWrapper}>
            {isLabel ? <p>Quantity</p> : null}
            <Button text="+" classes="round" onPress={() => {
                setQuatntity(quatntity + 1);
                dispatch(incrementQuantity(id, qty + 1));
            }} />


            <Input id="quantity__control" labelText="product__quantity" type="number" classes="form__control" value={quatntity} />
            <Button text="-" classes="round" onPress={() => {
                setQuatntity(quatntity - 1);
                dispatch(decrementQuantity(id, qty - 1));
            }} />

        </InputGroup>
    );
}

export default Quantity;