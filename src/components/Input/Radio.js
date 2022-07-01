import Input from './Input';
import radio from './radio.module.scss';

const Radio = ({ name }) => {
    return (
        <div className={radio.radio}>
            <Input name={name} id="product__colors1" type="radio" labelText="blue" />
        </div>
    );
}

export default Radio;