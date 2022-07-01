import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';
import ProducutColors from './ProductColors';
import ProducutSize from './ProductSize';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Share from '../Share/Share';
import FlexBox from '../Layout/Flexbox';
import LinkWithIcon from "../Links/LinkWithIcon";

import product from './product.module.scss';

const ProductDetails = () => {
    return (
        <>
            <Breadcrumb />
            <div className={product.product}>
                <h2 className={product.product__title}>Peekaback Hoodie</h2>
                <p className={product.product__price}>$95.00</p>
                <p className={product.product__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna. Read more</p>

                <ProducutColors />
                <ProducutSize />

                <Quantity />

                <Button classes="block" variant="primary" text="add to cart" />
                <Share classes={product.product__share}>
                    <FlexBox classes="d-flex">
                        <LinkWithIcon linkText="Save" linkIcon="heart.svg" />
                        <LinkWithIcon linkText="Share" linkIcon="edit.svg" />
                    </FlexBox>
                </Share>
            </div>
        </>

    );
}

export default ProductDetails;