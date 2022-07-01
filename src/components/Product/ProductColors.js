import colors from './productColors.module.scss';
import Radio from '../Input/Radio';

const ProductColors = () => {
    return (
        <div className={colors.product}>
            <p>Color</p>
            <Radio name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio name="colors" id="product__colors1" type="radio" labelText="blue" />
            <Radio name="colors" id="product__colors1" type="radio" labelText="blue" />
        </div>
    );
}

export default ProductColors;