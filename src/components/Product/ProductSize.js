import size from './productSize.module.scss';
import Radio from '../Input/Radio';

const ProductSize = () => {
    return (
        <div className={size.product}>
            <p>Size</p>
            <Radio name="size" id="product__colors1" type="radio" labelText="xs" />
            <Radio name="size" id="product__colors1" type="radio" labelText="s" />
            <Radio name="size" id="product__colors1" type="radio" labelText="m" />
            <Radio name="size" id="product__colors1" type="radio" labelText="l" />
            <Radio name="size" id="product__colors1" type="radio" labelText="xl" />
        </div>
    );
}

export default ProductSize;