import Input from './Input';
import radio from './radio.module.scss';

const Radio = ({ name, size, color }) => {
    return (
        <div className={radio.radio}>
            <Input name={name} id="product__colors1" type="radio" labelText="blue" />
            {size ? <span data-size={size}>{size}</span> : <span data-color={color}>{color}</span>}
        </div>
    );
}

export default Radio;