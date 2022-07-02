import size from './productSize.module.scss';
import Radio from '../Input/Radio';

const ProductSize = () => {
    return (
        <div className={size.product}>
            <p>Size</p>
            <Radio size="xs" name="size" id="product__colors1" type="radio" labelText="xs" />
            <Radio size="s" name="size" id="product__colors1" type="radio" labelText="s" />
            <Radio size="m" name="size" id="product__colors1" type="radio" labelText="m" />
            <Radio size="l" name="size" id="product__colors1" type="radio" labelText="l" />
            <Radio size="xl" name="size" id="product__colors1" type="radio" labelText="xl" />
        </div>
    );
}

export default ProductSize;