import { useDispatch } from "react-redux";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { incrementQuantity } from '../../actions/cartActions';

import quantity from './quantity.module.scss';

const Quantity = ({ isLabel, id }) => {

    const dispatch = useDispatch();

    const handleEvent = () => dispatch(incrementQuantity(id))
    return (
        <InputGroup classes={quantity.quantityWrapper}>
            {isLabel ? <p>Quantity</p> : null}
            <Button text="+" classes="round" onPress={e => handleEvent()} />
            <Input id="quantity__control" labelText="product__quantity" type="number" classes="form__control" value="1" />
            <Button text="-" classes="round" />
        </InputGroup>
    );
}

export default Quantity;