import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import './products.scss';
import { addToCart } from '../../actions/cartActions'
const Product = ({ Id, image, title, price, description }) => {
    const dispatch = useDispatch();
    const handleEvent = (e, productId) => {
        console.log("I was clicked" + productId);
        dispatch(addToCart(productId));
    };
    return (
        <Wrapper phone="12" tablet="6" desktop="4">
            <div className='product'>
                <div className='product-image'>
                    <img src={image} alt={description} height="150" />
                </div>
                <div className='product-name'>{title}</div>
                <div className='product-price'>${price}</div>
                <div className='product-favorite'>
                    <Image name="heart.svg" />
                </div>
                <Button text="Add To Cart" onPress={e => handleEvent(e, Id)} />
            </div>
        </Wrapper>
    );
}

export default Product;