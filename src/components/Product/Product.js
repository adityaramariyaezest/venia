import Wrapper from "../Header/Wrapper";
import Image from "../Image/Image";

const Product = ({ image, title, price }) => {
    return (
        <Wrapper phone="12" tablet="6" desktop="4">
            <div className='product'>
                <div className='product-image'>
                    <img src={image} alt="Sample Image" height="150" />
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