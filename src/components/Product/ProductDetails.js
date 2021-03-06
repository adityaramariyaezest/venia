import { useDispatch } from "react-redux";
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';
import ProducutColors from './ProductColors';
import ProducutSize from './ProductSize';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Share from '../Share/Share';
import FlexBox from '../Layout/Flexbox';
import LinkWithIcon from "../Links/LinkWithIcon";
import { addToCart } from '../../actions/cartActions';
import Ratings from "../Ratings/Ratings";
import ProductTitle from "./ProductTitle";

import product from './productDetails.module.scss';
import { useState } from "react";

const ProductDetails = ({ title, price, description, ratings, productID }) => {

    const [qty, setQty] = useState(1)

    const getQuantity = (q) => {
        setQty(q);
    }

    const dispatch = useDispatch();
    const handleEvent = (e, productId) => {
        dispatch(addToCart(productId, qty));
    };

    return (
        <>
            <Breadcrumb />
            <div className={product.product}>
                <ProductTitle title={title} />
                <p className={product.product__price}>${price}</p>
                <Ratings ratings={ratings} />
                <p className={product.product__description}>{description}</p>
                <ProducutColors />
                <ProducutSize />
                <Quantity isLabel id={productID} getQuantity={getQuantity} />
                <Button classes="block" variant="primary" text="add to cart" onPress={e => handleEvent(e, productID)} />
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