import size from './productSize.module.scss';
import Radio from '../Input/Radio';

const ProductSize = () => {
    return (
        <div className={size.product}>
            <p>Size</p>
            <Radio custom="true" size="xs" name="size" id="product__colors1" type="radio" labelText="xs" />
            <Radio custom="true" size="s" name="size" id="product__colors1" type="radio" labelText="s" />
            <Radio custom="true" size="m" name="size" id="product__colors1" type="radio" labelText="m" />
            <Radio custom="true" size="l" name="size" id="product__colors1" type="radio" labelText="l" />
            <Radio custom="true" size="xl" name="size" id="product__colors1" type="radio" labelText="xl" />
        </div>
    );
}

export default ProductSize;