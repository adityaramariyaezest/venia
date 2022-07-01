import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';
import ProducutColors from './ProductColors';
import ProducutSize from './ProductSize';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import product from './product.module.scss';

const ProductDetails = () => {
    return (
        <>
            <Breadcrumb />
            <div className={product.product}>
                <h2 className={product.product__title}>Peekaback Hoodie</h2>
                <p className={product.product__price}>$95.00</p>
                <p className={product.product.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna. Read more</p>

                <ProducutColors />
                <ProducutSize />

                <Quantity />

                <Button text="add to cart" />
            </div>
        </>

    );
}

export default ProductDetails;