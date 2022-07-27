import Input from './Input';
import radio from './radio.module.scss';

const Radio = ({ name, size, color, custom, direction, labelText, id }) => {
    return (
        <div className={radio.radio}>
            <Input name={name} id={id} type="radio" labelText={labelText} custom={custom} direction={direction} />
            {size ? <span data-size={size}>{size}</span> : ''}
            {color ? <span data-color={color}>{color}</span> : ''}
        </div>
    );
}

export default Radio;