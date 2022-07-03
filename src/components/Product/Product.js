import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import { Link } from 'react-router-dom';
import './products.scss';
const Product = ({ Id, image, title, price, description }) => {
    return (
        <Wrapper phone="12" tablet="6" desktop="4">
            <div className='product'>
                <div className='product-image'>
                    <Link to="/product-details" state={{ productID: Id }}><img src={image} alt={description} height="150" /></Link>
                </div>
                <div className='product-name'>{title}</div>
                <div className='product-price'>${price}</div>
                <div className='product-favorite'>
                    <Image name="heart.svg" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Product;