import colors from './productColors.module.scss';
import Radio from '../Input/Radio';

const ProductColors = () => {
    return (
        <div className={colors.product}>
            <p>Color</p>
            <Radio color="blue" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio color="red" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio color="black" name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio color="magenta" name="colors" id="product__colors1" type="radio" labelText="blue" />
        </div>
    );
}

export default ProductColors;