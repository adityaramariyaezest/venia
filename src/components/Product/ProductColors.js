import colors from './productColors.module.scss';
import Radio from '../Input/Radio';

const ProductColors = () => {
    return (
        <div className={colors.product}>
            <p>Color</p>
            <Radio custom="true" color="blue" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio custom="true" color="red" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio custom="true" color="black" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio custom="true" color="magenta" name="colors" id="product__colors1" type="radio" labelText="blue" />
        </div>
    );
}

export default ProductColors;