import { useDispatch } from "react-redux";
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Share from '../Share/Share';
import FlexBox from '../Layout/Flexbox';
import LinkWithIcon from "../Links/LinkWithIcon";
import { addToCart } from '../../actions/cartActions';
import Ratings from "../Ratings/Ratings";
import ProductTitle from "./ProductTitle";
import { ShareIcon, HeartIcon } from "../Icons/Icons";
import { useState } from "react";

import product from './productDetails.module.scss';

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
                <Quantity isLabel id={productID} getQuantity={getQuantity} />
                <Button type="solid" variant="primary" text="add to cart" isBlock onPress={e => handleEvent(e, productID)} />
                <Share classes={product.product__share}>
                    <FlexBox classes="d-flex">
                        <LinkWithIcon linkText="Save" linkIcon={HeartIcon} />
                        <LinkWithIcon linkText="Share" linkIcon={ShareIcon} />
                    </FlexBox>
                </Share>
            </div>
        </>
    );
}

export default ProductDetails;