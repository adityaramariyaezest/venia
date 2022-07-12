import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import { Link } from 'react-router-dom';
import product from './products.module.scss';
const Product = ({ Id, image, title, price, description }) => {
    return (
        <Wrapper phone="6" tablet="6" desktop="4">
            <div className={product.product}>
                <div className={product.product__image}>
                    <Link to="/product-details" state={{ productID: Id }}><img src={image} alt={description} height="150" /></Link>
                </div>
                <div className={product.product__name}>{title}</div>
                <div className={product.product__price}>${price}</div>
                <div className={product.product__favorite}>
                    <Image name="heart.svg" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Product;